import { Component, KeyValueDiffer, KeyValueDiffers, OnDestroy, OnInit } from '@angular/core';
import { Project } from '../../_models/project.model';
import { ProjectDocument, default_project } from '../../_models/project-document.model';
import { ProjectConverterService } from '../../_services/project-converter.service';
import { Language } from '../../_enums/language.enum';
import { FormatLanguagePipe } from '../../_pipes/format-language.pipe';
import { FirestoreService } from '../../_services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectOperation } from '../../_enums/project_operation.enum';
import { ProjectsService } from '../../_services/projects.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent implements OnInit, OnDestroy {
  operation!: ProjectOperation;
  raw_project!: ProjectDocument;
  project!: Project;
  languages_list: Language[] = [
    Language.cpp,
    Language.c,
    Language.py,
    Language.js,
    Language.java,
    Language.matlab,
    Language.arduino,
    Language.verilog
  ];
  formatLanguage = new FormatLanguagePipe();
  raw_project_differ!: KeyValueDiffer<string, any>;
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectConverter: ProjectConverterService,
    private differs: KeyValueDiffers,
    private firestoreService: FirestoreService,
    private projectsService: ProjectsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.operation = this.route.snapshot.data['operation'];
    if (this.operation === ProjectOperation.add) {
      this.raw_project = default_project()
      this.project = this.clean_raw();
      this.raw_project_differ = this.differs.find(this.raw_project).create();
    } else if (this.operation === ProjectOperation.edit) {
      const id = this.route.snapshot.paramMap.get("id");
      if (id === null) {
        this.location.back();
        return;
      }
      const subscription = this.projectsService.getProjectById(id!).subscribe((project) => {
        if (project === undefined) {
          this.location.back();
          return;
        }
        this.raw_project = this.projectConverter.convertProject(project);
        this.project = this.clean_raw();
        this.raw_project_differ = this.differs.find(this.raw_project).create();
      });
      this.subscriptions.push(subscription);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  clean_raw(): Project {
    return this.projectConverter.convertRawProject(
      this.raw_project
    );
  }

  public display_language = (language: string): string => {
    return this.formatLanguage.transform(language);
  }

  public thumbnail_validator = (value: string): boolean => {
    return value.startsWith("assets/thumbnails/");
  }

  submit_project() {
    if (this.operation === ProjectOperation.add) {
      this.firestoreService.addProject(this.raw_project)
      .then(() => {
        this.raw_project = default_project();
      });
    } else if(this.operation === ProjectOperation.edit) {
      this.firestoreService.updateProject(this.raw_project)
      .then(() => {
        this.location.back();
      })
    }
  }

  ngDoCheck(): void {
    const changes = this.raw_project_differ.diff(this.raw_project);
    if (changes) {
      this.project = this.clean_raw();
    }
  }
}

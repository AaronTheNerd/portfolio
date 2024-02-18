import { Component, KeyValueDiffer, KeyValueDiffers } from '@angular/core';
import { Project } from '../../_models/project.model';
import { DocumentEntry, default_project } from '../../_models/project-document.model';
import { ProjectConverterService } from '../../_services/project-converter.service';
import { Language } from '../../_enums/language.enum';
import { FormatLanguagePipe } from '../../_pipes/format-language.pipe';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent {
  raw_project: DocumentEntry = default_project();
  project: Project;
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
  private formatLanguage: FormatLanguagePipe;
  private raw_project_differ: KeyValueDiffer<string, any>;

  constructor(
    private projectConverter: ProjectConverterService,
    private differs: KeyValueDiffers
  ) {
    this.project = this.clean_raw();
    this.raw_project_differ = this.differs.find(this.raw_project).create();
    this.formatLanguage = new FormatLanguagePipe();
  }

  clean_raw(): Project {
    return this.projectConverter.convertRawProject(
      this.raw_project
    );
  }

  display_language(language: Language): string {
    return this.formatLanguage.transform(language);
  }

  ngDoCheck(): void {
    const changes = this.raw_project_differ.diff(this.raw_project);
    if (changes) {
      this.project = this.clean_raw();
    }
  }
}

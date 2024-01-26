import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/project.model';
import { catchError, of, tap } from 'rxjs';
import { Location } from '@angular/common';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  project!: Project;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get("id"));
    this.projectsService.getProject(id)
    .subscribe((project) => {
      if (!project) {
        this.goBack();
        return;
      }
      this.project = project;
    });
  }
}

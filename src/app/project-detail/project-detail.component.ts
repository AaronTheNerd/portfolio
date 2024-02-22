import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/project.model';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  @Input() project: Project | null = null;
  loading: boolean = true;
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  determineProjectOnPageLoad(): void {
    const title: string = this.route.snapshot.paramMap.get("name")!;
    const subscription = this.projectsService.getProjectById(title)
    .subscribe((project) => {
      if (!project) {
        this.goBack();
        return;
      }
      this.project = project;
      this.loading = false;
    });
    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    if (!this.project) {
      this.determineProjectOnPageLoad();
    } else {
      this.loading = false;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}

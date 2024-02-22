import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/project.model';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { FirestoreService } from '../_services/firestore.service';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  @Input() project: Project | null = null;
  loading: boolean = true;
  authenticated: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private location: Location,
    private auth: Auth,
    private router: Router,
    private firestore: FirestoreService
  ) {}

  goBack(): void {
    this.location.back();
  }

  edit(): void {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }

  deleteProject(): void {
    this.firestore.deleteProject(this.project!.id)
    .then(() => {
      this.router.navigate(["projects"]);
    })
  }

  determineProjectOnPageLoad(): void {
    const id: string = this.route.snapshot.paramMap.get("id")!;
    const subscription = this.projectsService.getProjectById(id)
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
    onAuthStateChanged(this.auth, (user) => {
      this.authenticated = user !== null;
    });
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

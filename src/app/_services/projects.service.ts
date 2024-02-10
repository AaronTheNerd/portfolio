import { EventEmitter, Injectable, OnDestroy, Output, Type, inject } from '@angular/core';

import { Project } from '../_models/project.model';
import { Observable, Subscription, of } from 'rxjs';
import { FirestoreService } from './firestore.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService implements OnDestroy {
  @Output() projectsChanged = new EventEmitter<Project[]>();
  projects: Project[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    public firestoreService: FirestoreService
  ) {
    const subscription = this.firestoreService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
      this.projectsChanged.next(this.getProjects());
    });
    this.subscriptions.push(subscription);
  }

  getProjects(): Project[] {
    return this.projects.slice();
  }

  getProjectByTitle(title: string): Observable<Project | undefined> {
    const project = this.projects.find((project: Project) => {
      return project.title === title;
    });
    return of(project);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}

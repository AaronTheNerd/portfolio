import { EventEmitter, Injectable, OnDestroy, Output } from '@angular/core';

import { Project } from '../_models/project.model';
import { Observable, Subscription, map, of } from 'rxjs';
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
    if (this.firestoreService.loading) {
      return this.firestoreService.getProjects().pipe(
        map((projects: Project[]) => {
          return this._findByName(projects, title);
        })
      );
    }
    return of(this._findByName(this.projects, title));
  }

  private _findByName(projects: Project[], title: string): Project | undefined {
    return projects.find((project: Project) => {
      return project.title === title;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}

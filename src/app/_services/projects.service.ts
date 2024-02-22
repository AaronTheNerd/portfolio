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

  getProjectById(id: string): Observable<Project | undefined> {
    if (this.firestoreService.loading) {
      return this.firestoreService.getProjects().pipe(
        map((projects: Project[]) => {
          return this._findById(projects, id);
        })
      );
    }
    return of(this._findById(this.projects, id));
  }

  private _findById(projects: Project[], id: string): Project | undefined {
    return projects.find((project: Project) => {
      return project.id === id;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}

import { Injectable, OnDestroy } from '@angular/core';

import { Project } from '../_models/project.model';
import { Subscription } from 'rxjs';
import { PROJECTS } from '../_data/projects.data';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService implements OnDestroy {
  projects: Project[] = PROJECTS;
  subscriptions: Subscription[] = [];

  getProjects(): Project[] {
    return this.projects.slice();
  }

  getProjectByTitle(title: string): Project | undefined {
    return this._findByTitle(this.projects, title);
  }

  private _findByTitle(projects: Project[], title: string): Project | undefined {
    return projects.find((project: Project) => {
      return project.title === title;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}

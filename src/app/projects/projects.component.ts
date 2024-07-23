import { Component } from '@angular/core';

import { Project } from '../_models/project.model';
import { QueryProjectsService } from '../_services/query-projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[];
  authenticated: boolean = false;

  constructor(
    private searchProjectService: QueryProjectsService,
  ) {
    this.projects = this.searchProjectService.getResults();
    this.searchProjectService.searchResultsChanged.subscribe((results: Project[]) => {
      this.projects = results;
    });
  }
}

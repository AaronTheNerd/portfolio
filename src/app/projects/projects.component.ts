import { Component } from '@angular/core';

import { Project } from '../_models/project.model';
import { QueryProjectsService } from '../_services/query-projects.service';
import { FirestoreService } from '../_services/firestore.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[];
  loading: boolean = true;

  constructor(
    private searchProjectService: QueryProjectsService,
    private firestoreService: FirestoreService
  ) {
    this.projects = this.searchProjectService.getResults();
    this.loading = this.firestoreService.loading;
    this.searchProjectService.searchResultsChanged.subscribe((results: Project[]) => {
      this.projects = results;
      this.loading = this.firestoreService.loading;
    });
  }

}

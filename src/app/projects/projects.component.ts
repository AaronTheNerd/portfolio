import { Component, OnInit } from '@angular/core';

import { Project } from '../_models/project.model';
import { QueryProjectsService } from '../_services/query-projects.service';
import { FirestoreService } from '../_services/firestore.service';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  loading: boolean = true;
  authenticated: boolean = false;

  constructor(
    private searchProjectService: QueryProjectsService,
    private firestoreService: FirestoreService,
    private auth: Auth,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.projects = this.searchProjectService.getResults();
    this.loading = this.firestoreService.loading;
    this.searchProjectService.searchResultsChanged.subscribe((results: Project[]) => {
      this.projects = results;
      this.loading = this.firestoreService.loading;
    });
  }

  ngOnInit(): void {
    onAuthStateChanged(this.auth, (user) => {
      this.authenticated = user !== null;
    });
  }

  add(): void {
    this.router.navigate(["new"], { relativeTo: this.route })
  }

}

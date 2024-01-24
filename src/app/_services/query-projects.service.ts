import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Project } from '../_models/project.model';
import { ProjectsService } from './projects.service';
import { ProjectQuery } from '../_models/project-query.model';
import { Filter } from '../_models/filter.model';
import { Sort } from '../_enums/sort.enum';

@Injectable({
  providedIn: 'root'
})
export class QueryProjectsService {
  searchResultsChanged = new Subject<Project[]>();
  searchResults: Project[];

  constructor(private projectsService: ProjectsService) {
    this.searchResults = this.projectsService.getProjects();
  }

  getResults(): Project[] {
    return this.searchResults.slice();
  }

  query(query: ProjectQuery): void {
    let results = this.projectsService.getProjects();
    results = this.filter(results, query.filter);
    results = this.search(results, query.search);
    results = this.sort(results, query.sort);
    this.searchResults = results;
    this.searchResultsChanged.next(this.getResults());
  }

  filter(projects: Project[], filter: Filter): Project[] {
    return projects;
  }

  search(projects: Project[], search: string): Project[] {
    return projects;
  }

  sort(projects: Project[], sort: Sort): Project[] {
    const titleSort = (a: Project, b: Project) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (titleA < titleB) return -1;
      if (titleB < titleA) return 1;
      return 0;
    };
    const languageSort = (a: Project, b: Project) => {
      const langA = a.languages[0].toLowerCase();
      const langB = b.languages[0].toLowerCase();

      if (langA < langB) return -1;
      if (langB < langA) return 1;
      return 0;
    };
    const dateSort = (a: Project, b: Project) => {
      const dateA = a.created;
      const dateB = b.created;

      if (dateA < dateB) return 1;
      if (dateB < dateA) return -1;
      return 0;
    };
    switch (sort) {
      case Sort.title_a_z:
        return projects.sort(titleSort);
      case Sort.title_z_a:
        return projects.sort(titleSort).reverse();
      case Sort.lang_a_z:
        return projects.sort(languageSort);
      case Sort.lang_z_a:
        return projects.sort(languageSort).reverse();
      case Sort.newest:
        return projects.sort(dateSort);
    }
    return projects;
  }
}

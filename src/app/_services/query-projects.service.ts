import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { Project } from '../_models/project.model';
import { ProjectsService } from './projects.service';
import { ProjectQuery, defaultQuery } from '../_models/project-query.model';
import { Filter } from '../_models/filter.model';
import { Sort } from '../_enums/sort.enum';
import { valueStringToLanguage } from '../_enums/language.enum'; 

@Injectable({
  providedIn: 'root'
})
export class QueryProjectsService implements OnDestroy {
  searchResultsChanged = new Subject<Project[]>();
  queryChanged = new Subject<ProjectQuery>();
  searchResults!: Project[];
  currentQuery: ProjectQuery;
  subscriptions: Subscription[] = [];

  constructor(private projectsService: ProjectsService) {
    this.currentQuery = defaultQuery();
    this._query(this.projectsService.getProjects());
    this.subscriptions.push(this.queryChanged.subscribe((query: ProjectQuery) => {
      this.currentQuery = query;
      this._query(this.projectsService.getProjects());
    }));
  }

  getQuery(): ProjectQuery {
    return this.currentQuery;
  }

  getResults(): Project[] {
    return this.searchResults.slice();
  }

  _query(projects: Project[]): void {
    let results = projects;
    results = this.filter(results, this.currentQuery.filter);
    results = this.search(results, this.currentQuery.search);
    results = this.sort(results, this.currentQuery.sort);
    this.searchResults = results;
    this.searchResultsChanged.next(this.getResults());
  }

  filter(projects: Project[], filter: Filter): Project[] {
    const allowedLanguages: string[] = [];
    for (let langauge in filter.includeLanguages) {
      if (filter.includeLanguages[langauge]) {
        allowedLanguages.push(langauge);
      }
    }
    return projects.filter((project: Project) => {
      return !project.school || filter.includeSchool;
    })
    .filter((project: Project) => {
      return allowedLanguages.filter((language) => {
        return project.languages.includes(valueStringToLanguage(language)!);
      }).length;
    });
  }

  search(projects: Project[], search: string): Project[] {
    if (!search || !search.trim())
      return projects;
    return projects.filter((project: Project) => {
      return project.title.toLowerCase().includes(search.toLowerCase())
        || project.description.toLowerCase().includes(search.toLowerCase())
        || project.tags.filter((tag: string) => {
          return tag.toLowerCase().includes(search);
        }).length > 0;
    });
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
    const creationSort = (a: Project, b: Project) => {
      const dateA = a.created;
      const dateB = b.created;

      if (dateA < dateB) return 1;
      if (dateB < dateA) return -1;
      return 0;
    };
    const modifiedSort = (a: Project, b: Project) => {
      const dateA = a.modified;
      const dateB = b.modified;

      if (dateA < dateB) return 1;
      if (dateB < dateA) return -1;
      return 0;
    }
    
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
        return projects.sort(creationSort);
      case Sort.modified:
        return projects.sort(modifiedSort);
    }
    return projects;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}

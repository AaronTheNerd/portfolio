import { EventEmitter, Injectable, OnDestroy, Output, inject } from '@angular/core';

import { Project } from '../_models/project.model';
import { Observable, Subscription, of } from 'rxjs';
import { DocumentData, Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Language, valueStringToLanguage } from '../_enums/language.enum';
import { DocumentEntry, ProjectDocument } from '../_models/project-document.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService implements OnDestroy {
  @Output() projectsChanged = new EventEmitter<Project[]>();
  projects: Project[] = [];
  firestore: Firestore = inject(Firestore);
  subscriptions: Subscription[] = [];

  constructor() {
    const itemCollection = collection(this.firestore, "projects");
    const subscription = collectionData(itemCollection).subscribe((data: DocumentData) => {
      this.projects = this._cleanCollectionData(data);
      console.log(this.projects);
      this.projectsChanged.next(this.getProjects());
    });
    this.subscriptions.push(subscription);
  }

  getProjects(): Project[] {
    return this.projects.slice();
  }

  getProject(id: number): Observable<Project | undefined> {
    const project = this.projects.find((project: Project) => {
      return project.id === id;
    });
    return of(project);
  }

  private _cleanCollectionData(data: DocumentData): Project[] {
    const rawProjects = data as ProjectDocument;
    const projects: Project[] = [];
    rawProjects.forEach((rawProject) => {
      projects.push(this._cleanRawProject(rawProject));
    });
    return projects;
  }

  private _cleanRawProject(rawProject: DocumentEntry): Project {
    return new Project(
      0,
      rawProject.title,
      rawProject.school,
      rawProject.languages.map((languageValue: string) => {
        return valueStringToLanguage(languageValue)!;
      }),
      rawProject.description,
      rawProject.tags,
      rawProject.modified.toDate(),
      rawProject.created.toDate(),
      rawProject.thumbnails,
      [],
      rawProject.gitLink ?? undefined,
      rawProject.favorite ? true : undefined
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}

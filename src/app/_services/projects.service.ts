import { EventEmitter, Injectable, OnDestroy, Output, Type, inject } from '@angular/core';

import { Project } from '../_models/project.model';
import { Observable, Subscription, of } from 'rxjs';
import { DocumentData, Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Language, valueStringToLanguage } from '../_enums/language.enum';
import { DocumentContentEntry, DocumentEntry, ProjectDocument } from '../_models/project-document.model';
import { DynamicContent } from '../_models/dynamic-content.model';
import { ParagraphComponent } from '../project-detail/dynamic/paragraph/paragraph.component';
import { SectionHeadingComponent } from '../project-detail/dynamic/section-heading/section-heading.component';
import { SubsectionHeadingComponent } from '../project-detail/dynamic/subsection-heading/subsection-heading.component';
import { SubsubsectionHeadingComponent } from '../project-detail/dynamic/subsubsection-heading/subsubsection-heading.component';


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
      rawProject.content.map((content: DocumentContentEntry) => {
        return this._cleanContentEntry(content);
      }),
      rawProject.gitLink ?? undefined,
      rawProject.favorite ? true : undefined
    );
  }

  private _cleanContentEntry(content: DocumentContentEntry): DynamicContent {
    return {
      componentType: this._parseComponentType(content.componentType),
      inputs: content.inputs
    }
  }

  private _parseComponentType(componentType: string): Type<any> {
    switch (componentType) {
      case "ParagraphComponent":
        return ParagraphComponent;
      case "SectionHeadingComponent":
        return SectionHeadingComponent;
      case "SubsectionHeadingComponent":
        return SubsectionHeadingComponent;
      case "SubsubsectionHeadingComponent":
        return SubsubsectionHeadingComponent;
    }
    throw new Error(`Unexpected componentType: ${componentType}`);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}

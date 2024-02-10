import { Injectable, Type, inject } from '@angular/core';
import { DocumentData, Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { Project } from '../_models/project.model';
import { DocumentContentEntry, DocumentEntry, ProjectDocument } from '../_models/project-document.model';
import { valueStringToLanguage } from '../_enums/language.enum';
import { ParagraphComponent } from '../project-detail/dynamic/paragraph/paragraph.component';
import { SectionHeadingComponent } from '../project-detail/dynamic/section-heading/section-heading.component';
import { SubsectionHeadingComponent } from '../project-detail/dynamic/subsection-heading/subsection-heading.component';
import { SubsubsectionHeadingComponent } from '../project-detail/dynamic/subsubsection-heading/subsubsection-heading.component';
import { DynamicContent } from '../_models/dynamic-content.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  firestore: Firestore = inject(Firestore);

  constructor() {}

  getProjects(): Observable<Project[]> {
    const itemCollection = collection(this.firestore, "projects");
    return collectionData(itemCollection).pipe(
      map((data: DocumentData) => {
        return this._cleanCollectionData(data);
      })
    );
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
}

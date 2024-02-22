import { Injectable, Type } from '@angular/core';
import { DynamicComponentEntry, ProjectDocument } from '../_models/project-document.model';
import { Project } from '../_models/project.model';
import { valueStringToLanguage } from '../_enums/language.enum';
import { DynamicContent } from '../_models/dynamic-content.model';
import { ParagraphComponent } from '../project-detail/dynamic/paragraph/paragraph.component';
import { SectionHeadingComponent } from '../project-detail/dynamic/section-heading/section-heading.component';
import { SubsectionHeadingComponent } from '../project-detail/dynamic/subsection-heading/subsection-heading.component';
import { SubsubsectionHeadingComponent } from '../project-detail/dynamic/subsubsection-heading/subsubsection-heading.component';
import { Timestamp } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjectConverterService {

  constructor() { }

  convertRawProject(rawProject: ProjectDocument): Project {
    return new Project(
      rawProject.id ?? "",
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
      rawProject.content.map((content: DynamicComponentEntry) => {
        return this._cleanContentEntry(content);
      }),
      rawProject.gitLink,
      rawProject.favorite
    );
  }

  private _cleanContentEntry(content: DynamicComponentEntry): DynamicContent {
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

  convertProject(project: Project): ProjectDocument {
    return new ProjectDocument(
      project.title,
      project.school,
      project.languages,
      project.description,
      project.tags,
      Timestamp.fromDate(project.modified),
      Timestamp.fromDate(project.created),
      project.thumbnails,
      project.content.map((entry: DynamicContent) => {
        return this._convertContentEntry(entry);
      }),
      project.gitLink,
      project.favorite,
      project.id
    );
  }

  _convertContentEntry(entry: DynamicContent): DynamicComponentEntry {
    return {
      componentType: this._convertComponentType(entry.componentType),
      inputs: entry.inputs
    };
  }

  _convertComponentType(componentType: Type<any>): string {
    switch (componentType) {
      case ParagraphComponent:
        return "ParagraphComponent";
      case SectionHeadingComponent:
        return "SectionHeadingComponent";
      case SubsectionHeadingComponent:
        return "SubsectionHeadingComponent";
      case SubsubsectionHeadingComponent:
        return "SubsubsectionHeadingComponent";
    }
    throw new Error(`Unexpected componentType: ${componentType}`);
  }
}

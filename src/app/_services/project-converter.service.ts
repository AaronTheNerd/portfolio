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
import { CodeFileComponent } from '../project-detail/dynamic/code-file/code-file.component';
import { RowComponent } from '../project-detail/dynamic/row/row.component';
import { VideoComponent } from '../project-detail/dynamic/video/video.component';

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
      rawProject.languages
      .map((languageValue: string) => {
        return valueStringToLanguage(languageValue)!;
      }),
      rawProject.description,
      rawProject.tags,
      rawProject.modified.toDate(),
      rawProject.created.toDate(),
      rawProject.thumbnails,
      rawProject.content
      .map((content: DynamicComponentEntry) => {
        return this._cleanContentEntry(content);
      })
      .filter(this._notNull),
      rawProject.gitLink,
      rawProject.favorite
    );
  }

  private _cleanContentEntry(content: DynamicComponentEntry): DynamicContent | null {
    const componentType = this._parseComponentType(content.componentType);
    if (componentType === null) {
      return null;
    }
    const result: {[key: string]: any} = { componentType, inputs: content.inputs };
    if (content.children) {
      result['children'] = content.children.map((entry) => {
        return this._cleanContentEntry(entry);
      })
      .filter(this._notNull);
    }
    return result as DynamicContent;
  }

  private _notNull<DynamicContent>(value: DynamicContent | null): value is DynamicContent {
    return value !== null;
  }

  private _parseComponentType(componentType: string): Type<any> | null {
    switch (componentType) {
      case "ParagraphComponent":
        return ParagraphComponent;
      case "SectionHeadingComponent":
        return SectionHeadingComponent;
      case "SubsectionHeadingComponent":
        return SubsectionHeadingComponent;
      case "SubsubsectionHeadingComponent":
        return SubsubsectionHeadingComponent;
      case "CodeFileComponent":
        return CodeFileComponent;
      case "RowComponent":
        return RowComponent
      case "VideoComponent":
        return VideoComponent
    }
    return null;
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
    let result: {[key: string]: any} = {
      componentType: this._convertComponentType(entry.componentType),
      inputs: entry.inputs
    }
    if (entry.children) {
      result['children'] = entry.children.map((entry: DynamicContent) => {
        return this._convertContentEntry(entry);
      });
    }
    return result as DynamicComponentEntry;
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
      case CodeFileComponent:
        return "CodeFileComponent";
      case RowComponent:
        return "RowComponent";
      case VideoComponent:
        return "VideoComponent";
    }
    throw new Error(`Unexpected componentType: ${componentType}`);
  }
}

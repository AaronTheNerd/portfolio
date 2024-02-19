import { Injectable, Type } from '@angular/core';
import { DocumentContentEntry, DocumentEntry } from '../_models/project-document.model';
import { Project } from '../_models/project.model';
import { valueStringToLanguage } from '../_enums/language.enum';
import { DynamicContent } from '../_models/dynamic-content.model';
import { ParagraphComponent } from '../project-detail/dynamic/paragraph/paragraph.component';
import { SectionHeadingComponent } from '../project-detail/dynamic/section-heading/section-heading.component';
import { SubsectionHeadingComponent } from '../project-detail/dynamic/subsection-heading/subsection-heading.component';
import { SubsubsectionHeadingComponent } from '../project-detail/dynamic/subsubsection-heading/subsubsection-heading.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectConverterService {

  constructor() { }

  convertRawProject(rawProject: DocumentEntry): Project {
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
      rawProject.favorite
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

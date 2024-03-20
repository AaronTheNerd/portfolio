import { Timestamp } from "@angular/fire/firestore";

export type DynamicComponentEntry = {
  componentType: string,
  inputs: {[key: string]: unknown},
  children?: DynamicComponentEntry[];
};

export class ProjectDocument {
  constructor(
    public title: string,
    public school: boolean,
    public languages: string[],
    public description: string,
    public tags: string[],
    public modified: Timestamp,
    public created: Timestamp,
    public thumbnails: string[],
    public content: DynamicComponentEntry[],
    public gitLink: string,
    public favorite: boolean,
    public id?: string,
  ) {}
}

export type ProjectCollection = ProjectDocument[];

export function default_project(): ProjectDocument {
  return new ProjectDocument(
    "",
    false,
    [],
    "",
    [],
    Timestamp.now(),
    Timestamp.now(),
    [],
    [],
    "",
    false
  );
}
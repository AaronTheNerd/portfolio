import { Timestamp } from "@angular/fire/firestore";

export type DocumentContentEntry = {
  componentType: string,
  inputs: {[key: string]: unknown}
};

export class DocumentEntry {
  constructor(
    public title: string,
    public school: boolean,
    public languages: string[],
    public description: string,
    public tags: string[],
    public modified: Timestamp,
    public created: Timestamp,
    public thumbnails: string[],
    public content: DocumentContentEntry[],
    public gitLink: string | null,
    public favorite: boolean
  ) {}
}

export type ProjectDocument = DocumentEntry[];

export function default_project(): DocumentEntry {
  return new DocumentEntry(
    "",
    false,
    [],
    "",
    [],
    Timestamp.now(),
    Timestamp.now(),
    [],
    [],
    null,
    false
  );
}
import { Timestamp } from "@angular/fire/firestore";

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
    public content: unknown[],
    public gitLink: string | null,
    public favorite: boolean
  ) {}
}

export type ProjectDocument = DocumentEntry[];
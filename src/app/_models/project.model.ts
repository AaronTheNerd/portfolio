import { Language } from "../_enums/language.enum";

export class Project {
  constructor(
    public title: string,
    public school: boolean,
    public languages: Language[],
    public description: string,
    public tags: string[],
    public modified: Date,
    public created: Date,
    public thumbnails: string[],
    public gitLink: string,
    public favorite: boolean
  ) {}
}

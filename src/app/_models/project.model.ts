import { Language } from "../_enums/language.enum";
import { DynamicContent } from "./dynamic-content.model";

export class Project {
  constructor(
    public id: string,
    public title: string,
    public school: boolean,
    public languages: Language[],
    public description: string,
    public tags: string[],
    public modified: Date,
    public created: Date,
    public thumbnails: string[],
    public content: DynamicContent[],
    public gitLink: string,
    public favorite: boolean
  ) {}
}

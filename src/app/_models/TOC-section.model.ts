export class TOCSection {
  constructor(
    public id: string,
    public title: string,
    public collapsed: boolean,
    public subsections: TOCSection[]
  ) {}
}
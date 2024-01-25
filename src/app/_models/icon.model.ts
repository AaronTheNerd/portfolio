import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export class Icon {
  constructor(
    public name: IconDefinition,
    public link: string,
    public tooltip: string
  ) {}
}
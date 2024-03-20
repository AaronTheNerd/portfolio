import { Type } from "@angular/core";

export class DynamicContent {
  constructor(
    public componentType: Type<any>,
    public inputs: Record<string, unknown>,
    public children?: DynamicContent[]
  ) {}
}
import { DynamicContent } from "./dynamic-content.model";

export abstract class DynamicComponent {
  abstract applyInputs(inputs: {[key: string]: any}, children?: DynamicContent[]): void;
}
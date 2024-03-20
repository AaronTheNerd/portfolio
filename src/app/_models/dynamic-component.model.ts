export abstract class DynamicComponent {
  abstract applyInputs(inputs: {[key: string]: any}): void;
}
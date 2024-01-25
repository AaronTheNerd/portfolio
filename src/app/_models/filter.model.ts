import { Language } from "../_enums/language.enum";

export class Filter {
  constructor(
    public includeLanguages: {[language: string]: boolean},
    public includeSchool: boolean
  ) {}
}

export function defaultFilter() {
  return new Filter({
    [Language.cpp]: true,
    [Language.c]: true,
    [Language.py]: true,
    [Language.js]: true,
    [Language.java]: true,
    [Language.matlab]: true,
    [Language.arduino]: true,
    [Language.verilog]: true
  }, true);
}
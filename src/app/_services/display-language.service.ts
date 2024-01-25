import { Injectable } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { Language } from '../_enums/language.enum';

@Injectable({
  providedIn: 'root'
})
export class DisplayLanguageService {
  constructor() { }

  display(lang: Language | string): string {
    let displayLang = "";
    const titleCase = new TitleCasePipe();
    switch (lang) {
      case Language.cpp:
        displayLang = "C++";
        break;
      case Language.js:
        displayLang = "JavaScript";
        break;
      case Language.matlab:
        displayLang = "MATLAB";
        break;
      default:
        displayLang = titleCase.transform(lang);
    }
    return displayLang;
  }
}

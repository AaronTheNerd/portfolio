import { Pipe, PipeTransform } from '@angular/core';
import { Language } from '../_enums/language.enum';
import { TitleCasePipe } from '@angular/common';

@Pipe({
  name: 'formatLanguage'
})
export class FormatLanguagePipe implements PipeTransform {

  transform(lang: Language | string): string {
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

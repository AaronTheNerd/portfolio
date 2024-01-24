import { Component, Input } from '@angular/core';
import { Language } from '../../_enums/language.enum';
import { DisplayLanguageService } from '../../_services/display-language.service';

@Component({
  selector: 'app-language-icon',
  templateUrl: './language-icon.component.html',
  styleUrl: './language-icon.component.scss'
})
export class LanguageIconComponent {
  @Input({ required: true }) icon!: Language;

  constructor(public displayLanguage: DisplayLanguageService) {}

  tooltip(): string {
    return this.displayLanguage.display(this.icon);
  }
}

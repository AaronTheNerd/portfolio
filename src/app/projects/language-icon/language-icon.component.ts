import { Component, Input } from '@angular/core';
import { Language } from '../../_enums/language.enum';

@Component({
  selector: 'app-language-icon',
  templateUrl: './language-icon.component.html',
  styleUrl: './language-icon.component.scss'
})
export class LanguageIconComponent {
  @Input({ required: true }) icon!: Language;
}

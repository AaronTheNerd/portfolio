import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: []
})
export class ParagraphComponent {
  @Input() text!: string;
}

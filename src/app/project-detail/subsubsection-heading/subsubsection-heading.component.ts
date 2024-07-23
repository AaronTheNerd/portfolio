import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subsubsection-heading',
  templateUrl: './subsubsection-heading.component.html',
  styleUrls: []
})
export class SubsubsectionHeadingComponent {
  @Input() title!: string;
  @Input() id!: string;
}

import { AfterViewChecked, Component, Input } from '@angular/core';
import { HighlightService } from '../../../_services/highlight.service';

@Component({
  selector: 'app-code-file',
  templateUrl: './code-file.component.html',
  styleUrl: './code-file.component.scss'
})
export class CodeFileComponent implements AfterViewChecked {
  @Input() title!: string;
  @Input() content!: string;
  @Input() language!: string;

  isHighlighted = false;
  isCollapsed = true;

  constructor(private highlightService: HighlightService) {}

  ngAfterViewChecked(): void {
    if (!this.isHighlighted) {
      this.highlightService.highlight();
      this.isHighlighted = true;
    }
  }
}

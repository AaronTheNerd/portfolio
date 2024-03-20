import { AfterViewChecked, Component } from '@angular/core';
import { HighlightService } from '../../../_services/highlight.service';
import { DynamicComponent } from '../../../_models/dynamic-component.model'

@Component({
  selector: 'app-code-file',
  templateUrl: './code-file.component.html',
  styleUrl: './code-file.component.scss'
})
export class CodeFileComponent extends DynamicComponent implements AfterViewChecked {
  title!: string;
  content!: string;
  language!: string;

  isHighlighted = false;
  isCollapsed = true;

  constructor(private highlightService: HighlightService) {
    super();
  }

  ngAfterViewChecked(): void {
    if (!this.isHighlighted) {
      this.highlightService.highlight();
      this.isHighlighted = true;
    }
  }

  applyInputs(inputs: {[key: string]: any}) {
    this.title = inputs['title'];
    this.content = inputs['content'];
    this.language = inputs['language'];
  }
}

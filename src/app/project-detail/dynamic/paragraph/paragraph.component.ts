import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../../../_models/dynamic-component.model';
import { DynamicContent } from '../../../_models/dynamic-content.model';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: []
})
export class ParagraphComponent extends DynamicComponent {
  @Input() text!: string;

  override applyInputs(inputs: { [key: string]: any; }, children?: DynamicContent[]): void {
    this.text = inputs['text'];
  }
}

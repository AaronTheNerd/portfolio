import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../../../_models/dynamic-component.model';
import { DynamicContent } from '../../../_models/dynamic-content.model';

@Component({
  selector: 'app-subsubsection-heading',
  templateUrl: './subsubsection-heading.component.html',
  styleUrls: []
})
export class SubsubsectionHeadingComponent extends DynamicComponent {
  @Input() title!: string;
  @Input() id!: string;

  override applyInputs(inputs: { [key: string]: any; }, children?: DynamicContent[]): void {
    this.title = inputs['title'];
    this.id = inputs['id'];
  }
}

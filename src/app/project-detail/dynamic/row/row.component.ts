import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../../../_models/dynamic-component.model';
import { DynamicContent } from '../../../_models/dynamic-content.model';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrl: './row.component.scss'
})
export class RowComponent extends DynamicComponent {
  @Input() widths!: string[];
  @Input() children!: DynamicContent[];

  override applyInputs(inputs: { [key: string]: any; }, children?: DynamicContent[]): void {
    this.widths = inputs['widths'];
    this.children = children!;
  }
}

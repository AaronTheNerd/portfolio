import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../../../_models/dynamic-component.model';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrl: './row.component.scss'
})
export class RowComponent extends DynamicComponent {
  @Input() widths!: string[];

  override applyInputs(inputs: { [key: string]: any; }): void {
    this.widths = inputs['widths'];
  }
}

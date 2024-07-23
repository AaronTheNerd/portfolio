import { Component, Input } from '@angular/core';
import { DynamicContent } from '../../_models/dynamic-content.model';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrl: './row.component.scss'
})
export class RowComponent {
  @Input() widths!: string[];
  @Input() children!: DynamicContent[];
}

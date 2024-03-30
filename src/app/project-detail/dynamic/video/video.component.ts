import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../../../_models/dynamic-component.model';
import { DynamicContent } from '../../../_models/dynamic-content.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent extends DynamicComponent {
  @Input() video_url!: string;
  @Input() autoplay!: boolean;
  @Input() controls!: boolean;
  @Input() description!: string;

  override applyInputs(inputs: { [key: string]: any; }, children?: DynamicContent[] | undefined): void {
    this.video_url = inputs['video_url'];
    this.autoplay = inputs['autoplay'];
    this.controls = inputs['controls'];
    this.description = inputs['description'];
  }
}

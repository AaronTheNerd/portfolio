import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html'
})
export class VideoComponent {
  @Input() video_url!: string;
  @Input() autoplay!: boolean;
  @Input() controls!: boolean;
  @Input() description!: string;
  @Input() loop!: boolean;
}

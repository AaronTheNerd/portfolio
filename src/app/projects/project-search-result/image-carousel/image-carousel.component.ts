import { Component, Input } from "@angular/core";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: "app-image-carousel",
  templateUrl: "./image-carousel.component.html",
  styleUrls: ["./image-carousel.component.scss"],
  animations: [
    trigger("fade", [
      transition("false=>true", [
        style({ opacity: 0 }),
        animate("2500ms 2000ms", style({ opacity: 1 })),
      ]),
    ]),
    trigger("fade2", [
      transition("false=>true", [
        style({ opacity: 0 }),
        animate("2500ms", style({ opacity: 1 })),
      ]),
      transition("true=>false", [
        animate("2500ms 2000ms", style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ImageCarouselComponent {
  @Input() images: string[] = [];

  toggle = false;
  count = 0;
  toggle2 = false;
  count2 = 0;

  onFade(event: any) {
    if (event.fromState) {
      this.count = (this.count + 1) % this.images.length;
    }
    this.toggle = !this.toggle;
  }
  onFade2(event: any) {
    this.toggle2 = !this.toggle2;
    if (event.fromState) {
      this.count2 = (this.count2 + 1) % this.images.length;
    }
  }
}
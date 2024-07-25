import { Component, Input } from "@angular/core";

@Component({
  selector: "app-section-heading",
  templateUrl: "./section-heading.component.html",
  styleUrls: [],
})
export class SectionHeadingComponent {
  @Input() title!: string;
}
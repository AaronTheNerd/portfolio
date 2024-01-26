import { Component, Input } from "@angular/core";

@Component({
  selector: "app-subsection-heading",
  templateUrl: "./subsection-heading.component.html",
  styleUrls: [],
})
export class SubsectionHeadingComponent {
  @Input() title!: string;
  @Input() id!: string;
}
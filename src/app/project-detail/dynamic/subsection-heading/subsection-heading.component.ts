import { Component, Input } from "@angular/core";
import { DynamicComponent } from "../../../_models/dynamic-component.model";
import { DynamicContent } from "../../../_models/dynamic-content.model";

@Component({
  selector: "app-subsection-heading",
  templateUrl: "./subsection-heading.component.html",
  styleUrls: [],
})
export class SubsectionHeadingComponent extends DynamicComponent {
  @Input() title!: string;
  @Input() id!: string;

  override applyInputs(inputs: { [key: string]: any; }, children?: DynamicContent[]): void {
    this.title = inputs['title'];
    this.id = inputs['id'];
  }
}
import { Component, Input, OnInit } from "@angular/core";
import { TOCSection } from "../../_models/TOC-section.model";
import { DynamicContent } from "../../_models/dynamic-content.model";
import { SectionHeadingComponent } from "../dynamic/section-heading/section-heading.component";
import { SubsectionHeadingComponent } from "../dynamic/subsection-heading/subsection-heading.component";
import { SubsubsectionHeadingComponent } from "../dynamic/subsubsection-heading/subsubsection-heading.component";

@Component({
  selector: "app-table-of-contents",
  templateUrl: "./table-of-contents.component.html",
  styleUrls: ["./table-of-contents.component.scss"],
})
export class TableOfContentsComponent implements OnInit {
  @Input() content!: DynamicContent[];
  
  sections: TOCSection[] = [];
  sectionTypes = [
    SectionHeadingComponent,
    SubsectionHeadingComponent,
    SubsubsectionHeadingComponent
  ];

  ngOnInit(): void {
    this.getSections();
  }

  getSections(): void {
    let sectionIndex = -1;
    let subsectionIndex = -1;
    this.content.forEach((component) => {
      if (!this.sectionTypes.includes(component.componentType)) {
        return;
      }
      const section = new TOCSection(
        <string>component.inputs["id"],
        <string>component.inputs["title"],
        false,
        []
      );
      switch (component.componentType) {
        case SectionHeadingComponent:
          this.sections.push(section);
          sectionIndex++;
          subsectionIndex = -1;
          break;
        case SubsectionHeadingComponent:
          this.sections[sectionIndex].subsections.push(section);
          subsectionIndex++;
          break;
        case SubsubsectionHeadingComponent:
          this.sections[sectionIndex].subsections[
            subsectionIndex
          ].subsections.push(section);
          break;
      }
    });
  }

  scrollIntoView(id: string): void {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
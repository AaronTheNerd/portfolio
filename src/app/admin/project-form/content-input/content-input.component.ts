import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DocumentContentEntry } from '../../../_models/project-document.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-content-input',
  templateUrl: './content-input.component.html',
  styleUrl: './content-input.component.scss'
})
export class ContentInputComponent {
  dynamicComponents: DocumentContentEntry[] = [
    {
      componentType: "ParagraphComponent",
      inputs: {
        text: ""
      }
    },
    {
      componentType: "SectionHeadingComponent",
      inputs: {
        title: "",
        id: ""
      }
    },
    {
      componentType: "SubsectionHeadingComponent",
      inputs: {
        title: "",
        id: ""
      }
    },
    {
      componentType: "SubsubsectionHeadingComponent",
      inputs: {
        title: "",
        id: ""
      }
    },
  ];
  @Input() content: DocumentContentEntry[] = [];
  @Output() contentChange = new EventEmitter<DocumentContentEntry[]>();

  drop(event: CdkDragDrop<DocumentContentEntry[]>) {
    moveItemInArray(this.content, event.previousIndex, event.currentIndex);
    console.log(`prev: ${event.previousIndex}, new: ${event.currentIndex}`)
    this.contentChange.emit(this.content.slice());
  }

  remove(index: number) {
    this.content.splice(index, 1);
    this.contentChange.emit(this.content.slice());
  }

  add_entry() {
    this.content.push(this.copy_component_entry(0));
    this.contentChange.emit(this.content.slice());
  }

  change_selection(index: number, id: number) {
    this.content[index] = this.copy_component_entry(id);
    this.contentChange.emit(this.content.slice());
  }

  index_of_component(componentType: string): number {
    return this.dynamicComponents.findIndex((dynamicComponent) => {
      return dynamicComponent.componentType === componentType;
    })
  }

  copy_component_entry(index: number): DocumentContentEntry {
    const default_entry = this.dynamicComponents[index];
    const entry = Object.assign({}, default_entry);
    entry.inputs = Object.assign({}, default_entry.inputs);
    return entry;
  }

  set_input_value(index: number, key: string, value: string) {
    this.content[index].inputs[key] = value;
    this.contentChange.emit(this.content.slice());
  }
}

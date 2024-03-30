import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DynamicComponentEntry } from '../../../_models/project-document.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

interface ComponentFormEntry extends DynamicComponentEntry {
  input_types?: { [key: string]: string }
}

@Component({
  selector: 'app-content-input',
  templateUrl: './content-input.component.html',
  styleUrl: './content-input.component.scss'
})
export class ContentInputComponent {
  dynamicComponents: ComponentFormEntry[] = [
    {
      componentType: "ParagraphComponent",
      inputs: {
        text: ""
      },
      input_types: {
        text: "textarea"
      }
    },
    {
      componentType: "SectionHeadingComponent",
      inputs: {
        title: "",
        id: ""
      },
      input_types: {
        title: "input",
        id: "input"
      }
    },
    {
      componentType: "SubsectionHeadingComponent",
      inputs: {
        title: "",
        id: ""
      },
      input_types: {
        title: "input",
        id: "input"
      }
    },
    {
      componentType: "SubsubsectionHeadingComponent",
      inputs: {
        title: "",
        id: ""
      },
      input_types: {
        title: "input",
        id: "input"
      }
    },
    {
      componentType: "CodeFileComponent",
      inputs: {
        title: "",
        content: "",
        language: ""
      },
      input_types: {
        title: "input",
        content: "textarea",
        language: "input"
      }
    },
    {
      componentType: "RowComponent",
      children: [],
      inputs: {
        widths: []
      },
      input_types: {
        widths: "multi-input"
      }
    },
    {
      componentType: "VideoComponent",
      inputs: {
        video_url: "",
        autoplay: false,
        controls: true,
        description: ""
      },
      input_types: {
        video_url: "input",
        autoplay: "checkbox",
        controls: "checkbox",
        description: "input"
      }
    }
  ];
  @Input() content: DynamicComponentEntry[] = [];
  @Output() contentChange = new EventEmitter<DynamicComponentEntry[]>();

  drop(event: CdkDragDrop<DynamicComponentEntry[]>) {
    moveItemInArray(this.content, event.previousIndex, event.currentIndex);
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

  copy_component_entry(index: number): DynamicComponentEntry {
    const default_entry = this.dynamicComponents[index];
    const entry = Object.assign({}, default_entry);
    entry.inputs = Object.assign({}, default_entry.inputs);
    if (entry.children !== undefined) {
      entry.children = [];
    }
    delete entry.input_types;
    return entry as DynamicComponentEntry;
  }

  set_input_value(index: number, key: string, value: any) {
    this.content[index].inputs[key] = value;
    this.contentChange.emit(this.content.slice());
  }

  get_input_types(componentType: string): {[key: string]: string} {
    const entry = this.dynamicComponents.find((entry) => {
      return entry.componentType === componentType
    })!;
    return entry.input_types!;
  }

  set_children(index: number, value: DynamicComponentEntry[]) {
    this.content[index].children = value;
    this.contentChange.emit(this.content.slice());
  }
}

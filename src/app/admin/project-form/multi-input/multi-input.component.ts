import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-multi-input',
  templateUrl: './multi-input.component.html',
  styleUrl: './multi-input.component.scss'
})
export class MultiInputComponent {
  @Input() id!: string;
  @Input() options: string[] = [];
  @Input() display = (a: string) => { return a; };
  @Input() value: string[] = [];
  @Output() valueChange = new EventEmitter<string[]>();
  input_value: string = "";

  add_value() {
    if (this.is_valid(this.input_value)) {
      this.value.push(this.input_value);
      this.valueChange.emit(this.value.slice());
    }
    this.input_value = "";
  }

  is_valid(input_value: string): boolean {
    return !this.value.includes(input_value)
      && input_value !== ""
      && (this.options.length ? this.options.includes(input_value) : true);
  }

  remove_value(index: number) {
    if (0 <= index && index < this.value.length) {
      this.value.splice(index, 1);
      this.valueChange.emit(this.value.slice());
    }
  }
}

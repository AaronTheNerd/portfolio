import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-timestamp-input',
  templateUrl: './timestamp-input.component.html',
  styleUrl: './timestamp-input.component.scss'
})
export class TimestampInputComponent implements OnInit {
  @Input() id!: string;
  @Input() value: Timestamp = Timestamp.now();
  private _date!: Date;

  get date(): Date {
    return this._date;
  }

  @Input()
  set date(new_date: Date) {
    if (new_date === this._date) return;
    this._date = new_date;
    this.value = Timestamp.fromDate(this._date);
    this.valueChange.emit(this.value);
  }

  @Output() valueChange = new EventEmitter<Timestamp>();

  ngOnInit() {
    this._date = this.value.toDate();
  }
}

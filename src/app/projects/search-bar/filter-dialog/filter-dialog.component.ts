import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Filter } from '../../../_models/filter.model';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrl: './filter-dialog.component.scss'
})
export class FilterDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Filter
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  enableAllLanguages(data: Filter) {
    for (let key in data.includeLanguages) {
      data.includeLanguages[key] = true;
    }
  }

  disableAllLanguages(data: Filter) {
    for (let key in data.includeLanguages) {
      data.includeLanguages[key] = false;
    }
  }
}

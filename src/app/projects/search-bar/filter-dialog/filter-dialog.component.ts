import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Filter } from '../../../_models/filter.model';
import { DisplayLanguageService } from '../../../_services/display-language.service';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrl: './filter-dialog.component.scss'
})
export class FilterDialogComponent {

  constructor(
    private displayLanguage: DisplayLanguageService,
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Filter
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  displayLanguageString(language: string): string {
    return this.displayLanguage.display(language);
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

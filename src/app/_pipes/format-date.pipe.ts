import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: Date): string {
    return formatDate(
      date.getTime() + date.getTimezoneOffset() * 60_000,
      "MM/yyyy",
      "en-US"
    );
  }

}

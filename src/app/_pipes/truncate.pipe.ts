import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number) {
    if (value.length <= limit) {
      return value;
    }
    limit = value.substr(0, limit).lastIndexOf(" ");
    return value.length > limit ? value.substr(0, limit) + "..." : value;
  }

}

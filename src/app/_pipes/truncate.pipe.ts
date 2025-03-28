import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number, ignore_limit: boolean) {
    if (value.length <= limit || ignore_limit) {
      return value;
    }
    limit = value.substr(0, limit).lastIndexOf(" ");
    return value.length > limit ? value.substr(0, limit) + "..." : value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsisMiddlePipe'
})
export class EllipsisMiddlePipePipe implements PipeTransform {

  transform(value: string) {
    if (value) {
      return `${value.substr(0, 7)}...${value.substr(value.length - 5)}`;
    }
    return;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(value: boolean, locale: string = "en"): string {
      return value ? "Yes" :"No";
    }
  }

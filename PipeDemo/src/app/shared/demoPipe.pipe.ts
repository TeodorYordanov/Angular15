import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demoPipe'
})
export class DemoPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let newText = value.toString().replace("test","demo");
    return newText; 
  }

}

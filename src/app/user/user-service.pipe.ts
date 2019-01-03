import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userService'
})
export class UserServicePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

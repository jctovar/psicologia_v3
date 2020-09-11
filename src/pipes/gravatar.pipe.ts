import {Pipe, PipeTransform} from '@angular/core';
var md5 = require('md5');

@Pipe({
    name: 'gravatar'
})
export class GravatarPipe implements PipeTransform {
  transform(email: string): string {
    let gravatar = "https://www.gravatar.com/avatar/" + md5(email) + "?d=wavatar";
    //console.log(gravatar);
    return gravatar;
  }
} 
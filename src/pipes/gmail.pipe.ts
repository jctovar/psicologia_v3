import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'gmail'
})
export class GmailPipe implements PipeTransform {
  transform(email: string): string {
    const url = "https://momai.iztacala.unam.mx/email/photo/" + email;
    
    return url;
  }
} 
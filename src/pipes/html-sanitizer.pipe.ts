import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml'
})
export class HtmlSanitizerPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}

  transform(value: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
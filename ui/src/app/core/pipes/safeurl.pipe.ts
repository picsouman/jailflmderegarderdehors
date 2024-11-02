import {inject, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'safeurl',
  standalone: true
})
export class SafeurlPipe implements PipeTransform {

  private readonly sanitizer = inject(DomSanitizer)

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

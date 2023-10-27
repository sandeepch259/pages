import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appNgKlass]'
})
export class NgKlassDirective {

  constructor(private element: ElementRef) { }

  @Input('appNgKlass') set className(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}

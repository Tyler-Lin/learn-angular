import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBtnStyle]',
  standalone: true,
})
export class BtnStyleDirective {
  @HostBinding('style.backgroundColor') backgroundColor = 'blue';
  @HostBinding('style.color') color = 'white';
}

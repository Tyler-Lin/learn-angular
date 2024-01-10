import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBtnStyle]',
  standalone: true,
})
export class BtnStyleDirective {
  @HostBinding('style.backgroundColor') backgroundColor = 'blue';
  @HostBinding('style.color') color = 'white';
  @HostBinding('style.border-radius') borderRadius = '5px';
  @HostBinding('style.padding') padding = '5px 10px';
}

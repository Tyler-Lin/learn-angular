import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appHoverTooltip]',
  standalone: true,
})
export class HoverTooltipDirective {
  @Input({ required: true }) tooltipTemplate!: TemplateRef<any>;
  @Input() hoverClass: string = 'hovered'; // 預設的 hover 類名
  private tooltip: any;

  el = inject(ElementRef);
  viewContainerRef = inject(ViewContainerRef);
  renderer = inject(Renderer2);

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltip) {
      this.show();
      this.setHoverStyle(true);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) {
      this.hide();
      this.setHoverStyle(false);
    }
  }

  private setHoverStyle(isHovered: boolean) {
    if (isHovered) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        'yellow'
      );
      // this.renderer.addClass(this.el.nativeElement, this.hoverClass);
    } else {
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        'transparent'
      );
      // this.renderer.removeClass(this.el.nativeElement, this.hoverClass);
    }
  }

  show() {
    const view = this.viewContainerRef.createEmbeddedView(this.tooltipTemplate);
    this.tooltip = view.rootNodes[0];
    document.body.appendChild(this.tooltip);
    this.setTooltipPosition();
  }

  hide() {
    this.viewContainerRef.clear();
    if (this.tooltip) {
      document.body.removeChild(this.tooltip);
      this.tooltip = null;
    }
  }

  private setTooltipPosition() {
    if (!this.tooltip) return;

    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltip.getBoundingClientRect();
    const windowWidth = window.innerWidth;

    let top, left;

    // 檢查是否會超出螢幕右側
    if (hostPos.right + tooltipPos.width > windowWidth) {
      // 如果會超出，將 tooltip 放在正下方靠右
      top = hostPos.bottom + 10; // 10px 的間距
      left = hostPos.right - tooltipPos.width;
    } else {
      // 否則，放在右側
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.right + 10; // 10px 的間距
    }

    // 確保 tooltip 不會超出左側
    left = Math.max(10, left); // 至少距離左側 10px

    this.tooltip.style.top = `${top}px`;
    this.tooltip.style.left = `${left}px`;
  }
}

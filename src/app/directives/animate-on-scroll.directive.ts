import { Directive, ElementRef, AfterViewInit, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[animateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements AfterViewInit {
  @Input() animateClass: string = 'animate';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  trigged: boolean = false;
  ngAfterViewInit() {
    setTimeout(() => {
      this.checkScroll();
    }, 20)
  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent() {
    if (this.trigged) return;
    this.checkScroll();
  }

  private checkScroll() {
    const element = this.el.nativeElement;
    const bound = element.getBoundingClientRect();
    const yElement = bound.top;
    const y = window.innerHeight;
    if (yElement < (y - bound.height / 2) && !element.classList.contains(this.animateClass)) {
      element.classList.add(this.animateClass);
      this.trigged = true;
    }
  }
}

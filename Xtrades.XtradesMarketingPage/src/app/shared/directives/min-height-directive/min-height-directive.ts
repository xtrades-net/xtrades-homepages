import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[minHeight]',
})
export class MinHeightDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: RouterEvent) => {
        if (event.url !== '/')
          this.renderer.setStyle(this.el.nativeElement, 'min-height', '100%');
      });
  }
}

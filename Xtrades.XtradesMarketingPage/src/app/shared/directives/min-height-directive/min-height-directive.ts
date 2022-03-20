import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Event as NavigationEvent } from '@angular/router';
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
      .pipe(
        filter(
          (event: NavigationEvent): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((e: NavigationEvent) => {
        if (e instanceof NavigationEnd) {
          if (e.url !== '/')
            this.renderer.setStyle(this.el.nativeElement, 'min-height', '100%');
        }
      });
  }
}

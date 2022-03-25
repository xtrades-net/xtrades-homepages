import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { ScreenService } from 'src/app/core/screen.service';

@Directive({
  selector: '[appToggle]',
})
export class ToggleDirective implements OnInit {
  @Input() isNav = false;
  @HostBinding('class.expanded') isActive = false;
  isMobile = false;

  constructor(
    private elRef: ElementRef,
    private screenService: ScreenService
  ) {}

  ngOnInit(): void {
    if (this.isNav) {
      return;
    }
    this.screenService.screenSize$.subscribe((x) => {
      this.isMobile = x.width < 992;
      if (!this.isMobile) this.toggleVisibility();
      return this.isMobile;
    });
  }

  @HostListener('click', ['$event']) onClick() {
    if (this.isNav) {
      this.expandRoute();
    } else {
      this.toggleVisibility();
    }
  }

  toggleVisibility() {
    this.isActive = !this.isActive;
    const mainElement =
      this.elRef.nativeElement.querySelector('.faq__article-hero');
    const description = mainElement.querySelector('.faq__article-description');
    !description.classList.contains('expanded')
      ? description.classList.add('expanded')
      : description.classList.remove('expanded');
  }

  expandRoute() {
    // const route =
    //   this.elRef.nativeElement.parentElement.querySelector('.wrapper');
    const route = this.elRef.nativeElement.nextSibling;
    !route.classList.contains('expanded')
      ? route.classList.add('expanded')
      : route.classList.remove('expanded');
    console.log(route.classList);
  }
}

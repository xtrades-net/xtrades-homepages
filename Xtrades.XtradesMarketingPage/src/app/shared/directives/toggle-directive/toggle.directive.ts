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
  @HostBinding('class.expanded') isActive = false;
  isMobile = false;

  constructor(
    private elRef: ElementRef,
    private screenService: ScreenService
  ) {}

  ngOnInit(): void {
    this.screenService.screenSize$.subscribe((x) => {
      this.isMobile = x.width < 992;
      if (!this.isMobile) this.toggleVisibility();
      return this.isMobile;
    });
  }

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    if (clickedElement.className !== 'link-without-toogle-effect') {
      this.toggleVisibility();
    }
  }

  toggleVisibility() {
    this.isActive = !this.isActive;
    let mainElement = this.elRef.nativeElement;
    if (mainElement.querySelector('.faq__article-hero')) {
      mainElement =
        this.elRef.nativeElement.querySelector('.faq__article-hero');
    }
    const description = mainElement.querySelector('.faq__article-description');
    !description.classList.contains('expanded')
      ? description.classList.add('expanded')
      : description.classList.remove('expanded');
  }
}

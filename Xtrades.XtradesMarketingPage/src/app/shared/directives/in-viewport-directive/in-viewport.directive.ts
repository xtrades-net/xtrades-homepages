import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { fromEvent, interval, Subject, takeUntil, throttle } from 'rxjs';
import {
  CustomAnimationOptions,
  ExtendedCounterAnimationOptions,
} from 'src/app/animations/animations';

@Directive({
  selector: '[appInViewport]',
})
export class InViewportDirective implements AfterViewInit, AfterContentChecked {
  @Input() options: CustomAnimationOptions = {
    start: 0,
    end: 0,
    duration: 1000,
  };
  @Output() inviewport = new EventEmitter<ExtendedCounterAnimationOptions>();
  isElementScrolledIntoView: boolean = false;
  hasAnimationRan = false;

  destroy = new Subject();
  destroy$ = this.destroy.asObservable();

  private observer: IntersectionObserver | null = null;
  @Input() offset = '5%';

  constructor(private el: ElementRef, private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.checkForIntersectingElement();
  }

  private checkForIntersectingElement() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.hasAnimationRan) {
          fromEvent(window, 'scroll')
            .pipe(throttle(() => interval(1000)))
            .pipe(takeUntil(this.destroy$))
            .subscribe((e: Event) => {
              if (this.elRef && !this.hasAnimationRan) {
                if (!this.hasAnimationRan && this.options) {
                  this.inviewport.emit({
                    obj: this.elRef.nativeElement,
                    ...this.options,
                  });
                  this.hasAnimationRan = true;
                }
              }
            });
          this.destroyObserver();
        }
      },
      {
        rootMargin: this.offset,
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private destroyObserver(): void {
    if (this.observer) {
      this.observer.unobserve(this.el.nativeElement);
      this.observer.disconnect();
      this.observer = null;
    }
  }

  ngAfterContentChecked(): void {
    if (this.hasAnimationRan) {
      this.destroy.next(null);
    }
  }
}

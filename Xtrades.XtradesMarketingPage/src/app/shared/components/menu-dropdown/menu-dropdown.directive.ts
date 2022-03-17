import { MenuDropdownElement } from './menu-dropdown-element/menu-dropdown-element.component';
import { MenuDropdownComponent } from './menu-dropdown.component';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
  OnDestroy,
  Renderer2,
  EventEmitter,
  OnInit,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  ComponentFactory,
  ChangeDetectorRef,
} from '@angular/core';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ScreenService } from '@core/screen.service';

export enum TooltipDisplayDirection {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
  Optimize = 'optimize',
  DownRight = 'downRight',
}

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit, OnDestroy {
  @Input()
  dropdownInput: any | ComponentFactory<any> = {
    componentType: MenuDropdownComponent,
  };

  @Input()
  data!: MenuDropdownElement[];

  @Input()
  position: any = 'fixed';

  @Input()
  componentInputsArray!: { name: string; value: any }[];

  @Input()
  clickBehaviour = true;

  @Input()
  hoverBehaviour = false;

  @Input()
  dismissTooltipOnClick = true;

  @Input()
  direction: TooltipDisplayDirection = TooltipDisplayDirection.Down;

  @Input()
  width: any;

  @Input()
  height: any;

  @Input()
  maxWidth: any;

  tooltipElement!: HTMLElement;
  documentClickHandler: any;

  isVisibleInternal = false;
  get isVisible() {
    return this.isVisibleInternal;
  }

  set isVisible(value) {
    this.isVisibleInternal = value;
    this.visibilityChange.emit(this.isVisibleInternal);
  }

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  visibilityChange = new EventEmitter<boolean>();

  triggeredOnItself = false;

  wasTriggeredByHovering = false;
  wasTriggeredByClicking = false;
  wasClickAlreadyHandled = false;
  customComponentRendering = false;
  subscriptions = new Subscription();
  timer: any;

  constructor(
    private parent: ElementRef,
    private renderer: Renderer2,
    private injector: Injector,
    private app: ApplicationRef,
    private screenService: ScreenService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef
  ) {
    this.clickBehaviour = screenService.isMobile ? true : this.clickBehaviour;
    this.hoverBehaviour = screenService.isMobile ? false : this.hoverBehaviour;
    this.documentClickHandler = this.onDocumentClick.bind(this);
    this.subscriptions.add(
      this.app.isStable
        .pipe(filter((x) => x && this.customComponentRendering))
        .subscribe(() => {
          this.determineTooltipPosition();
          this.customComponentRendering = false;
        })
    );
  }

  ngOnInit() {
    if (this.clickBehaviour) {
      document.addEventListener('click', this.documentClickHandler, true);
    }
  }

  @HostListener('mouseenter', ['$event'])
  onHoverEnter(event: any) {
    if (
      this.hoverBehaviour &&
      (!this.clickBehaviour || !this.wasTriggeredByClicking)
    ) {
      this.isVisible = true;
      this.wasTriggeredByHovering = true;
      this.wasTriggeredByClicking = false;
      // this.timer = setTimeout(() => this.createTooltip(), 1000);
      this.createTooltip();
      event.stopPropagation();
    }
  }

  @HostListener('mouseleave')
  onHoverLeave() {
    if (
      this.hoverBehaviour &&
      (!this.clickBehaviour || !this.wasTriggeredByClicking)
    ) {
      this.isVisible = false;

      this.destroyTooltip();
    }
  }

  @HostListener('click', ['$event'])
  @HostListener('touchstart', ['$event'])
  @HostListener('touchend', ['$event'])
  @HostListener('mousedown', ['$event'])
  @HostListener('mouseup', ['$event'])
  @HostListener('pointerup', ['$event'])
  @HostListener('pointerdown', ['$event'])
  onClick(event: any) {
    if (!this.clickBehaviour || this.wasClickAlreadyHandled) {
      event.stopPropagation();
      return;
    }

    this.wasClickAlreadyHandled = true;

    if (this.hoverBehaviour) {
      if (this.isVisible && !this.wasTriggeredByHovering) {
        this.destroyTooltip();
        this.isVisible = false;
        this.wasTriggeredByClicking = false;
      } else {
        this.wasTriggeredByClicking = true;
        if (!this.isVisible) {
          this.createTooltip();
        }
        this.isVisible = true;
      }
      this.wasTriggeredByHovering = false;
      this.triggeredOnItself = true;
      event.stopPropagation();
      return false;
    } else {
      if (this.isVisible) {
        this.destroyTooltip();
      } else {
        this.createTooltip();
      }
      this.isVisible = !this.isVisible;
      this.triggeredOnItself = true;
      event.stopPropagation();
      return false;
    }
  }

  private onDocumentClick(event: any) {
    setTimeout(() => {
      if (!this.triggeredOnItself) {
        if (this.isVisible) {
          this.destroyTooltip();
          this.isVisible = false;
          this.wasTriggeredByClicking = false;
          this.wasTriggeredByHovering = false;
        }
      }
      this.triggeredOnItself = false;
      this.wasClickAlreadyHandled = false;
      event.stopPropagation();
    }, 0);
  }

  private generateTooltip() {
    this.tooltipElement = this.renderer.createElement('div');
    this.tooltipElement.style.cssText = `position: ${this.position};
      background: white;
      color: black;
      border-radius: 5px;
      overflow: auto;
      z-index: 29999;
      cursor: pointer;
      font-family: fractulalt-medium;`;
    this.tooltipElement.style.height = this.height ? `${this.height}px` : '';
    this.tooltipElement.style.width = this.width ? `${this.width}px` : 'unset';
    this.tooltipElement.style.maxHeight = this.height ? `${this.height}px` : '';
    this.tooltipElement.style.maxWidth = this.maxWidth
      ? `${this.maxWidth}px`
      : this.width
      ? `${this.width}px`
      : 'none';
    this.tooltipElement.style.minHeight = this.height ? `${this.height}px` : '';
    this.tooltipElement.style.minWidth = this.width
      ? `${this.width}px`
      : this.parent.nativeElement.clientWidth + 'px';

    if (this.dropdownInput.componentType) {
      if (this.dropdownInput.componentType) {
        this.dropdownInput =
          this.componentFactoryResolver.resolveComponentFactory(
            this.dropdownInput.componentType
          );
      }
      const ref = (this.dropdownInput as ComponentFactory<any>).create(
        this.injector,
        [],
        this.tooltipElement
      );
      const inputNames = (
        this.dropdownInput as ComponentFactory<any>
      ).inputs.map((x) => x.propName);
      if (this.dropdownInput.componentType && !this.componentInputsArray) {
        ref.instance.data = this.data;
      } else if (this.componentInputsArray) {
        this.componentInputsArray.forEach((inputKeyValue) => {
          if (inputNames.includes(inputKeyValue.name)) {
            ref.instance[inputKeyValue.name] = inputKeyValue.value;
          }
        });
      }
      this.app.attachView(ref.hostView);
      this.customComponentRendering = true;
    } else {
      this.tooltipElement.innerHTML = this.dropdownInput;
    }
  }

  createTooltip() {
    this.generateTooltip();
    this.renderer.appendChild(document.body, this.tooltipElement);
    this.determineTooltipPosition();
    this.cdr.detectChanges();
    if (this.clickBehaviour) {
      this.tooltipElement.addEventListener('click', (event) => {
        this.triggeredOnItself = !this.dismissTooltipOnClick;
        event.stopPropagation();
      });
    }
    if (!this.customComponentRendering) {
      this.determineTooltipPosition();
    }
  }

  destroyTooltip() {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
    }
  }

  determineTooltipPosition(
    direction: TooltipDisplayDirection = this.direction
  ) {
    const parentRectBox: DOMRect =
      this.parent.nativeElement.getBoundingClientRect();
    const elementRectBox: DOMRect =
      this.tooltipElement.getBoundingClientRect() as DOMRect;
    const parentBoxTopLeftCorner = new Point(
      parentRectBox.left,
      parentRectBox.top
    );
    const parentBoxTopRightCorner = new Point(
      parentRectBox.left + parentRectBox.width,
      parentRectBox.top
    );
    const parentBoxBottomLeftCorner = new Point(
      parentRectBox.left,
      parentRectBox.top + parentRectBox.height
    );
    const parentBoxBottomRightCorner = new Point(
      parentRectBox.left + parentRectBox.width,
      parentRectBox.top + parentRectBox.height
    );

    let topCalculated = 0;
    let leftCalculated = 0;

    switch (direction) {
      case TooltipDisplayDirection.DownRight:
        this.determineTooltipPosition(TooltipDisplayDirection.Down);
        this.determineTooltipPosition(TooltipDisplayDirection.Right);
        break;
      case TooltipDisplayDirection.Down:
        topCalculated = parentBoxBottomLeftCorner.y;
        this.tooltipElement.style.top = `${topCalculated}px`;
        this.determineTooltipPosition(TooltipDisplayDirection.Left);
        break;
      case TooltipDisplayDirection.Up:
      case TooltipDisplayDirection.Optimize:
      default:
        topCalculated = parentBoxTopLeftCorner.y - elementRectBox.height;
        leftCalculated = parentBoxTopRightCorner.x - elementRectBox.width;
        if (
          topCalculated < 0 &&
          parentBoxBottomLeftCorner.y + elementRectBox.height
        ) {
          this.determineTooltipPosition(TooltipDisplayDirection.Down);
          break;
        }
        this.tooltipElement.style.top = `${topCalculated}px`;
        this.tooltipElement.style.left = `${
          elementRectBox.width >= parentRectBox.width
            ? leftCalculated > 0
              ? leftCalculated
              : 0
            : parentBoxBottomLeftCorner.x
        }px`;
        break;
      case TooltipDisplayDirection.Right:
        const rightOverflow =
          parentBoxBottomLeftCorner.x +
          elementRectBox.width -
          this.screenService.width;
        const restrictRight = rightOverflow > 0;
        this.tooltipElement.style.left = `${
          parentBoxBottomLeftCorner.x - (restrictRight ? rightOverflow : 0)
        }px`;
        break;
      case TooltipDisplayDirection.Left:
        leftCalculated =
          elementRectBox.width >= parentRectBox.width
            ? parentBoxBottomRightCorner.x - elementRectBox.width
            : parentBoxBottomLeftCorner.x;
        this.tooltipElement.style.left = `${
          leftCalculated >= 0 ? leftCalculated : 0
        }px`;
        break;
    }
  }

  ngOnDestroy() {
    if (this.clickBehaviour) {
      document.removeEventListener('click', this.documentClickHandler, true);
    }
    this.destroyTooltip();
    this.subscriptions.unsubscribe();
  }
}

class Point {
  constructor(public x: number, public y: number) {}
}

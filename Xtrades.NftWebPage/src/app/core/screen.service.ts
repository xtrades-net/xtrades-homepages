import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, Observable } from 'rxjs';
import { debounce } from 'rxjs/operators';

export class ScreenDimensions {
  constructor(
    public height: number,
    public width: number,
    public isMobile: boolean
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  private _screenSize$: BehaviorSubject<ScreenDimensions> =
    new BehaviorSubject<ScreenDimensions>({
      height: window.innerHeight,
      width: window.innerWidth,
      isMobile: window.innerWidth < 992,
    });
  public screenSize$: Observable<ScreenDimensions> =
    new Observable<ScreenDimensions>();

  public get isMobile() {
    return this._screenSize$.getValue().isMobile;
  }

  public get width() {
    return this._screenSize$.getValue().width;
  }

  constructor() {
    const resize = fromEvent(window, 'resize');
    const result = resize.pipe(debounce((i) => interval(200)));
    result.subscribe(() => {
      this._screenSize$.next({
        height: window.innerHeight,
        width: window.innerWidth,
        isMobile: window.innerWidth < 992,
      });
    });
    this.screenSize$ = this._screenSize$.asObservable();
  }
}

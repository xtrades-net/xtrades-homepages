import { Injectable } from '@angular/core';

const inactiveScrollClass = 'inactive-scroll';

/*
 * The only purpose of this service is
 * to add/remove class to <body> element to
 * prevent default browser scrolling.
 *
 * Please use it for modals or overlay popups.
 */
@Injectable({
  providedIn: 'root',
})
export class BodyScrollingService {
  constructor(private window: Window) {}

  preventScrolling(): void {
    this.window.document.body.classList.add(inactiveScrollClass);
  }

  allowScrolling(): void {
    this.window.document.body.classList.remove(inactiveScrollClass);
  }
}

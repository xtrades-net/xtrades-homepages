import { Inject, Injectable } from '@angular/core';

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
export class LoadingService {
  constructor() {}

  removeLoader(): void {
    document.querySelector('body')?.classList.remove('inactive-scroll');
    document.querySelector('.full-screen')?.classList.remove('full-height');
  }
}

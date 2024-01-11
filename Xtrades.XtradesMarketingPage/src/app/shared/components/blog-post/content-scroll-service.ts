import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentScrollService {
  public scrollToSection = new Subject();
  scrollToSection$ = this.scrollToSection.asObservable();
  constructor() {}

  goTo(data: number): void {
    this.scrollToSection.next(data);
  }
}

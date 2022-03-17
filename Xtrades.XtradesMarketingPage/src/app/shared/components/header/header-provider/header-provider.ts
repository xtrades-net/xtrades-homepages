import { Injectable } from '@angular/core';
import { HeaderElement } from '../header-models';

@Injectable({ providedIn: 'root' })
export class HeaderProvider {
  public headerElements: HeaderElement[] = [];

  constructor() {
    this.populateHeaderElements([]);
  }

  public populateHeaderElements(headerElements: HeaderElement[]) {}
}

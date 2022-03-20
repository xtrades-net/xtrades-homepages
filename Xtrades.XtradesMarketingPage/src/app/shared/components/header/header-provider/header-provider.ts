import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';
import { HeaderElement } from '../header-models';

@Injectable({ providedIn: 'root' })
export class HeaderProvider {
  public headerElements: HeaderElement[] = [];

  constructor() {
    this.populateHeaderElements([
      // HeaderElement.apply({ title: 'App', directUrl: 'app' }),
      // HeaderElement.apply({ title: 'Learn', directUrl: 'learn' }),
      // HeaderElement.apply({ title: 'Earn', directUrl: 'earn' }),
      // HeaderElement.apply({ title: 'About us', directUrl: 'about' }),
      // HeaderElement.apply({ title: 'Gear', directUrl: 'gear' }),
      HeaderElement.apply({ title: 'Plans', directUrl: 'plans' }),
      // HeaderElement.apply({ title: 'Discord', directUrl: 'discord' }),
    ]);
  }

  public populateHeaderElements(headerElements: HeaderElement[]) {
    this.headerElements = cloneDeep(headerElements);
  }
}

import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';
import { HeaderElement } from '../header-models';

@Injectable({ providedIn: 'root' })
export class HeaderProvider {
  public headerElements: HeaderElement[] = [];
  public headerElementsLast: HeaderElement[] = [];

  constructor() {
    this.populateHeaderElements([
      HeaderElement.apply({ title: 'Home', directUrl: '' }),
      HeaderElement.apply({ title: 'Blogs', directUrl: 'blogs' }),
    ]);
    this.populateHeaderElementsLast([
      HeaderElement.apply({ title: 'Discount', directUrl: 'discount' }),
    ]);
  }

  public populateHeaderElements(headerElements: HeaderElement[]) {
    this.headerElements = cloneDeep(headerElements);
  }

  public populateHeaderElementsLast(headerElements: HeaderElement[]) {
    this.headerElementsLast = cloneDeep(headerElements);
  }
}

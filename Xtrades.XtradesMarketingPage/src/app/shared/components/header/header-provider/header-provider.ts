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
      HeaderElement.apply({ title: 'xBlog', directUrl: 'blogs' }),
      HeaderElement.apply({
        title: 'Crowdfunding Raise',
        directUrl: 'crowdfunding',
      }),
    ]);
    // this.populateHeaderElementsLast([
    //   HeaderElement.apply({ title: 'Discount', directUrl: 'militarydiscount' }),
    // ]);
  }

  public populateHeaderElements(headerElements: HeaderElement[]) {
    this.headerElements = cloneDeep(headerElements);
  }

  public populateHeaderElementsLast(headerElements: HeaderElement[]) {
    this.headerElementsLast = cloneDeep(headerElements);
  }
}

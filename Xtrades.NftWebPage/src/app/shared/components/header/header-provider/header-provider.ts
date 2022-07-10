import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';
import { HeaderElement } from '../header-models';

@Injectable({ providedIn: 'root' })
export class HeaderProvider {
  public headerElements: HeaderElement[] = [];

  constructor() {
    this.populateHeaderElements([
      HeaderElement.apply({ title: 'White paper', directUrl: '' }),
      HeaderElement.apply({ title: 'Cryptotraders', directUrl: '' }),
      HeaderElement.apply({ title: 'Xtrades', directUrl: '' }),
    ]);
  }

  public populateHeaderElements(headerElements: HeaderElement[]) {
    this.headerElements = cloneDeep(headerElements);
  }
}
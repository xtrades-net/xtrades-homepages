import { MenuDropdownElement } from '../menu-dropdown/menu-dropdown-element/menu-dropdown-element.component';

export class HeaderElement implements MenuDropdownElement {
  constructor(
    public title: string,
    public elements: HeaderElement[],
    public directUrl?: string
  ) {}

  static apply(data: {
    title?: string;
    elements?: HeaderElement[];
    directUrl?: string;
  }) {
    return new HeaderElement(
      data.title ? data.title : '',
      data.elements ? data.elements : [],
      data.directUrl
    );
  }
}

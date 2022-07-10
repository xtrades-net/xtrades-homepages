export class MenuDropdownElement {
  constructor(
    public title?: string,
    public elements?: MenuDropdownElement[],
    public directUrl?: string
  ) {}
}

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

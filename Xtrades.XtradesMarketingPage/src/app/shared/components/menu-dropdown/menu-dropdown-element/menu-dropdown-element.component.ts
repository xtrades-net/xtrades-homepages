import { Component, Input } from '@angular/core';

export class MenuDropdownElement {
  constructor(
    public title?: string,
    public elements?: MenuDropdownElement[],
    public directUrl?: string
  ) {}
}

@Component({
  selector: 'app-menu-dropdown-element',
  templateUrl: './menu-dropdown-element.component.html',
  styleUrls: ['./menu-dropdown-element.component.scss'],
})
export class MenuDropdownElementComponent {
  @Input() data: MenuDropdownElement = {};
}

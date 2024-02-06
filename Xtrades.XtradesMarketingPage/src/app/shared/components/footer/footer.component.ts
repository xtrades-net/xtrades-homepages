/* eslint-disable max-len */
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() backgroundColor: string = '';
  @Input() withEmail = false;
}

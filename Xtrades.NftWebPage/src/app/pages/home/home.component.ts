/* eslint-disable max-len */
import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  handleGoToBetaAppClick(): void {
    window.location.href = 'https://app.xtrades.net/';
  }
}

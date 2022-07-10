import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'nft';
  logos = ['assets/logos/crypto.svg', 'assets/logos/xtrades.svg'];
  menuElements = ['White Paper, Xtrades, Cryptotraders'];
}

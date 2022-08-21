import { Component } from '@angular/core';

@Component({
  selector: 'app-nft-goals',
  templateUrl: './nft-goals.component.html',
  styleUrls: ['./nft-goals.component.scss']
})
export class NftGoalsComponent {
  i = 0;
  j = 0;
  k = 0;
  txt1 = 'The goal of this NFT is to provide holders a method of “owning a piece of the Xtrades and CryptoTraders Pie” by turning it into a yield generating as set and providing utilities that serve to provide more value to the user than it’s cost of mint. Q We believe that major improvements can be made to the Online Social Finance Realm and our goal is to continue exploring those  improvements and applying them to our ever-growing community.'; /* The text */
  speed = 50;
  avatar = {
    avatarLink: '../../../../assets/images/image 1.png',
    name: ''
  }

  typeWriter(selector: string, text?: string) {
    const base = this.txt1;
      setInterval(() => {
          if (base && this.i < base.length) {
            // @ts-ignore
            if (base.charAt(this.i) === 'Q') {
              base.replace('Q', '');
              document.querySelector(selector)!.innerHTML += "<br/>";
              document.querySelector(selector)!.innerHTML += "<br/>";
              this.i++;
            }
            document.querySelector(selector)!.innerHTML += base.charAt(this.i);
            this.i++;
          }
      }, 5);
  }

  typeWriter1(selector: string, text?: string) {
    const base = text;
      setInterval(() => {
          if (base && this.j < base.length) {
            document.querySelector(selector)!.innerHTML += base.charAt(this.j);
            this.j++;
          }
      }, .1);
  }

  typeWriter2(selector: string, text?: string) {
    const base = text;
      setInterval(() => {
          if (base && this.k < base.length) {
            document.querySelector(selector)!.innerHTML += base.charAt(this.k);
            this.k++;
          }
      }, 10);
  }

  handleGoToLinkClick(link: string): void {
    window.open(
      link,
      '_blank'
    );
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-our-numbers',
  templateUrl: './our-numbers.component.html',
  styleUrls: ['./our-numbers.component.scss']
})
export class OurNumbersComponent {
  numbers = [
    {
      value: '8.417', 
      description: 'Supply'
    },
    {
      value: '11:24:59', 
      description: 'Countdown'
    },
    {
      value: '5.682', 
      description: '# of Elite Members'
    },
    {
      value: '0.2', 
      description: 'ETH Mint'
    },
    {
      value: '$1.7M+', 
      description: 'Money paid to Traders in 18 Months'
    },{
      value: '7', 
      description: 'Ways to Earn'
    }
  ];
}

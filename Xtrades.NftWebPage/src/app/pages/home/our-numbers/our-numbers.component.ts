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
      additionalStartText: '',
      additionalEndText: '',
      description: 'Supply',
      toFixed: 3
    },
    {
      value: '150',
      type: 'time',
      additionalStartText: '',
      additionalEndText: '',
      description: 'Countdown',
      toFixed: 0
    },
    {
      value: '5.682',
      additionalStartText: '',
      additionalEndText: '',
      description: '# of Elite Members',
      toFixed: 3
    },
    {
      value: '0.2',
      additionalStartText: '',
      additionalEndText: '',
      description: 'ETH Mint',
      toFixed: 1
    },
    {
      value: '1.7', 
      additionalStartText: '$',
      additionalEndText: 'M+',
      description: 'Money paid to Traders in 18 Months',
      toFixed: 1
    },{
      value: '7', 
      additionalStartText: '',
      additionalEndText: '',
      description: 'Ways to Earn',
      toFixed: 0
    }
  ];
}

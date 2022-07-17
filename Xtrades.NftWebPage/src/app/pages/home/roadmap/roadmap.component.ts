import { Component } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent {
  steps = [
    {
      text: 'Rep',
      url: '../../../assets/images/Rep.svg'
    },
    {
      text: 'Save',
      url: '../../../assets/images/save.svg',
    },
    {
      text: 'Earn',
      url: '../../../assets/images/Earn.svg'
    },
    {
      text: 'Tech',
      url: '../../../assets/images/tech.svg'
    },
  ];
}

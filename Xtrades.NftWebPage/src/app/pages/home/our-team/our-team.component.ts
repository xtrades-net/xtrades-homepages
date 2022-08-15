import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent {
  team = [
    {
      name: 'Joseph Yetam',
      avatarLink: '../../../assets/images/Rectangle 81.png'
    },
    {
      name: 'Tony Gephs',
      avatarLink: '../../../assets/images/Rectangle 82.png'
    },
    {
      name: 'Alian Jakep',
      avatarLink: '../../../assets/images/Rectangle 83.png'
    },
    {
      name: 'Ellen Jankins',
      avatarLink: '../../../assets/images/Rectangle 84.png'
    },
    {
      name: 'Jack Nickel',
      avatarLink: '../../../assets/images/Rectangle 85.png'
    },
    {
      name: 'Kian Lands',
      avatarLink: '../../../assets/images/Rectangle 86.png'
    }
  ]
}

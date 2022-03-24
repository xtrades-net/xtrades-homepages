import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-discord',
  templateUrl: './discord.component.html',
  styleUrls: ['./discord.component.scss'],
})
export class DiscordComponent implements OnInit, AfterContentChecked {
  index = 0;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.router.events.subscribe((event: any) => {
      // if (event) {
      const index = this.route.snapshot.firstChild?.data['index'];
      // console.log('title-', index);
      this.index = index;
      console.log(this.index);
      // }
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent implements OnInit {
  public backgroundColor: string = '';
  @Input() blogPost: any;
  @Input() index: any;

  ngOnInit(): void {
    if (this.index == '0' || this.index % 3 == 0) {
      this.backgroundColor = '#FF7676';
    } else if ((this.index - 1) % 3 == 0) {
      this.backgroundColor = '#4AC9E5';
    } else {
      this.backgroundColor = '#6ADD34';
    }
  }
}

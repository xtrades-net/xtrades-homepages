import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  isOpen$: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  ) as BehaviorSubject<boolean>;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.isOpen$.next(!this.isOpen$.getValue());
  }
}

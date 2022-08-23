import { Component, Input, OnChanges } from '@angular/core';
import { countdown } from '../our-numbers/helpers';

@Component({
  selector: 'app-number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.scss']
})
export class NumberCardComponent implements OnChanges {
  @Input() number!: {
    value: string,
    type?: string,
    description: string,
    additionalStartText: string,
    additionalEndText: string,
    toFixed: number
  };
  counterAnimationOptions!: any;

  ngOnChanges() {
    this.counterAnimationOptions = {
      start: 0,
      end: !this.number.type ? Number(this.number.value).toFixed(this.number.toFixed) : 0,
      toFixed: this.number.toFixed,
      duration: 1500
    };
    if (this.number.type === 'time') {
      countdown(new Date("Mar 15, 2023 12:00:00"));
    }
  }

  animateCounterValue(options: any): void {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / options.duration,
        1
      );

      options.obj.innerHTML = 
        (progress * (options.end - options.start) + options.start).toFixed(options.toFixed);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
}

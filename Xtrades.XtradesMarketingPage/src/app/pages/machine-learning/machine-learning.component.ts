import { Component } from '@angular/core';

@Component({
  selector: 'app-machine-learning',
  templateUrl: './machine-learning.component.html',
  styleUrls: ['./machine-learning.component.scss'],
})
export class MachineLearningComponent {
  public isModalShown = false;
  constructor() {}

  openModal() {
    this.isModalShown = true;
  }

  navigateToPlans(): void {
    window.open('https://app.xtrades.net/plans', '_blank');
  }
}

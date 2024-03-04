import { Component } from '@angular/core';

@Component({
  selector: 'app-machine-learning',
  templateUrl: './machine-learning.component.html',
  styleUrls: ['./machine-learning.component.scss'],
})
export class MachineLearningComponent {
  public isModalShown = false;
  constructor() {}

  showConfirmationModal() {
    this.isModalShown = true;
  }

  openModal(path: string, param: string): void {
    window.open(`https://app.xtrades.net/${path}?modal=${param}`, '_blank');
  }
}

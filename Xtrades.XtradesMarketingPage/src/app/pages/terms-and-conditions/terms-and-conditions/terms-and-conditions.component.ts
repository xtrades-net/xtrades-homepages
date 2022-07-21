import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoadingService } from '@core/loading.service';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss'],
})
export class TermsAndConditionsComponent implements AfterViewInit {
  constructor(
  private loadingService: LoadingService
  ) {}

  ngAfterViewInit(): void {
    this.loadingService.removeLoader();
  }
}

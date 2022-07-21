import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoadingService } from '@core/loading.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.scss'],
})
export class PrivacyPolicyComponent implements AfterViewInit {
  constructor(
  private loadingService: LoadingService
  ) {}

  ngAfterViewInit(): void {
    this.loadingService.removeLoader();
  }

}
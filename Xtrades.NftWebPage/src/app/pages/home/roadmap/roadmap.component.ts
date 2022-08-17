import { Component } from '@angular/core';
import { ModalService } from '@shared/components/modal/modal.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent {
  steps = [
    {
      text: 'Rep',
      url: '../../../assets/images/Rep.svg',
      modal: [
        'Discord Verified NFT Holder',
        'Application Verified NFT Holder',
      ]
    },
    {
      text: 'Save',
      url: '../../../assets/images/save.svg',
      modal: [
        'All NFT Holders Receive Elite Membership (Access App Discounts and Features)',
      ]
    },
    {
      text: 'Earn',
      url: '../../../assets/images/Earn.svg',
      modal: [
        '$Xbits (Staking)',
        'Activate Increased Earnings and Rewards In-App (Power Up Exclusive to NFT Holders)',
        'Floor Sweep Mechanism (50% of Creator Fees)'
      ]
    },
    {
      text: 'Tech',
      url: '../../../assets/images/tech.svg',
      modal: [
        
        'Release Xtrades MVP (Done)',
        'Release CryptoTraders MVP',
        'Merge CT and XT Application',
        'Integrate Xbits to CT and XT app',
        'Continue creating utilities for Xbits',
        'XTCT DAO (Decentralized Autonomous Organization)'
      ]
    },
  ];

  constructor(private modalService: ModalService) {}

  openRoadmapModal(step: any) {
    this.modalService.open(step.text, step);
  }
}

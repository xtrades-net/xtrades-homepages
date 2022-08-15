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
        'All NFT Holders Receive Elite Membership (Access App Discounts and Features)',
        'All NFT Holders Receive Elite Membership (Access App Discounts and Features)',
        'All NFT Holders Receive Elite Membership (Access App Discounts and Features)'
      ]
    },
    {
      text: 'Save',
      url: '../../../assets/images/save.svg',
      modal: [
        'All NFT Holders Receive Elite Membership (Access App Discounts and Features)',
        'All NFT Holders Receive Elite Membership (Access App Discounts and Features)',
        'All NFT Holders Receive Elite Membership (Access App Discounts and Features)'
      ]
    },
    {
      text: 'Earn',
      url: '../../../assets/images/Earn.svg',
      modal: [
        'All NFT Holders Receive Elite Membership (Access App Discounts and Features)',
        'All NFT Holders Receive Elite Membership (Access App Discounts and Features)',
        'All NFT Holders Receive Elite Membership (Access App Discounts and Features)'
      ]
    },
    {
      text: 'Tech',
      url: '../../../assets/images/tech.svg',
      modal: [
        'All NFT Holders Receive Elite Membership (Access App Discounts and Features)',
        'All NFT Holders Receive Elite Membership (Access App Discounts and Features)',
        'All NFT Holders Receive Elite Membership (Access App Discounts and Features)'
      ]
    },
  ];

  constructor(private modalService: ModalService) {}

  openRoadmapModal(step: any) {
    this.modalService.open(step.text, step);
  }
}

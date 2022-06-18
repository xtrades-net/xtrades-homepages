import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-video-hero',
  templateUrl: './video-hero.component.html',
  styleUrls: ['./video-hero.component.scss']
})
export class VideoHeroComponent implements AfterViewInit {
  @ViewChild('background') backgroundImage!: ElementRef;
  @ViewChild("player") player!: ElementRef; 
  playVideo = false;
  backgroundLoaded = false;

  constructor(private modalService: ModalService) {}

  ngAfterViewInit(): void {
    this.backgroundImage.nativeElement.addEventListener('load', () => this.backgroundLoaded = true);
  }

  play() {
    this.playVideo = true;
    this.modalService.open('video-modal');
  }

  closeModal($event: any) {
    this.modalService.close($event.id);
  }
}

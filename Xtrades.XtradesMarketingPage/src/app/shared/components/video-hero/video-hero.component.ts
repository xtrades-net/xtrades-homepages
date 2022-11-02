import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LoadingService } from '@core/loading.service';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-video-hero',
  templateUrl: './video-hero.component.html',
  styleUrls: ['./video-hero.component.scss'],
})
export class VideoHeroComponent implements AfterViewInit {
  @ViewChild('background') backgroundImage!: ElementRef;
  @ViewChild('player') player!: ElementRef;
  playVideo = false;
  backgroundLoaded = false;

  constructor(
    private modalService: ModalService,
    private loadingService: LoadingService
  ) {}

  ngAfterViewInit(): void {
    this.loadingService.removeLoader();
    this.backgroundImage.nativeElement.addEventListener(
      'load',
      () => (this.backgroundLoaded = true)
    );
  }

  play() {
    this.playVideo = true;
    // this.modalService.open('video-modal');
    console.log(this.player);
    this.player.nativeElement.play();
  }

  closeModal($event: any) {
    this.modalService.close($event.id);
  }
}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-hero',
  templateUrl: './video-hero.component.html',
  styleUrls: ['./video-hero.component.scss']
})
export class VideoHeroComponent implements AfterViewInit {
  @ViewChild('background') backgroundImage!: ElementRef;
  playVideo = false;
  backgroundLoaded = false;

  ngAfterViewInit(): void {
    this.backgroundImage.nativeElement.addEventListener('load', () => this.backgroundLoaded = true);
    setTimeout(function() {
      (document.querySelector('.web-demo__play-video-arrow') as HTMLElement)?.click();
    }, 5000);
  }

  play() {
    this.playVideo = true;
  }

}

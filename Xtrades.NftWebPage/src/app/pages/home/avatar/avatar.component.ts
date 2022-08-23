import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() avatar!: {
    avatarLink: string;
    name: string;
  };
  @Input() hasTransparentBackground = false;
  i = 0;

  constructor() {}

  typeWriter($event: any) {
    const base = this.avatar.name;
      setInterval(() => {
          if (base && this.i < base.length) {
            $event.obj.innerHTML += base.charAt(this.i);
            this.i++;
          }
      }, 30);
  }
}

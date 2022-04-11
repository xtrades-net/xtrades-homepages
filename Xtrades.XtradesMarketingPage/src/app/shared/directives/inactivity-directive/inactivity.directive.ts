import { Directive, OnDestroy } from '@angular/core';
import { ModalService } from '@shared/components/modal/modal.service';
import { debounceTime, fromEvent, Subscription, tap } from 'rxjs';
import { Utils } from 'src/app/utils/utils';

@Directive({
  selector: '[appInactivity]',
})
export class InactivityDirective implements OnDestroy {
  scrollSubscription = new Subscription();
  hasModalBeenShown = false;

  constructor(private modalService: ModalService) {
    this.scrollSubscription.add(
      fromEvent(window, 'scroll')
        .pipe(debounceTime(15000))
        .subscribe(() => {
          if (
            !Utils.getCookie('isSubscribedToMemberships') &&
            !this.hasModalBeenShown
          ) {
            this.modalService.open('subscribe-modal');
            this.hasModalBeenShown = true;
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.scrollSubscription.unsubscribe();
  }
}

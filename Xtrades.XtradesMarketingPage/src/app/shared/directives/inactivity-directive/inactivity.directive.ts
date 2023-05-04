import { Directive, OnDestroy } from '@angular/core';
import { ModalService } from '@shared/components/modal/modal.service';
import { debounceTime, fromEvent, Subscription, take } from 'rxjs';

@Directive({
  selector: '[appInactivity]',
})
export class InactivityDirective implements OnDestroy {
  scrollSubscription = new Subscription();

  constructor(private modalService: ModalService) {
    const isSubscribed =
      localStorage.getItem('isSubscribedToMemberships') === 'true';
    if (!isSubscribed) {
      const visitedCount = localStorage.getItem('visitedCount');
      const isFirstVisit = visitedCount === null;
      if (isFirstVisit || parseInt(visitedCount) >= 5) {
        this.subscribeToScrollEvent();
        localStorage.setItem('visitedCount', '0');
      } else {
        let newVisited = visitedCount ? parseInt(visitedCount) + 1 : 1;
        localStorage.setItem('visitedCount', newVisited.toString());
      }
    }
  }

  private subscribeToScrollEvent() {
    this.scrollSubscription.add(
      fromEvent(window, 'scroll')
        .pipe(take(1), debounceTime(30000))
        .subscribe(() => {
          this.modalService.open('subscribe-modal');
        })
    );
  }

  ngOnDestroy(): void {
    this.scrollSubscription.unsubscribe();
  }
}

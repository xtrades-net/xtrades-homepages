import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IntercomService {
  public init(): void {
    window.Intercom('boot', {
      app_id: environment.intercomID,
    });
  }

  public show(): void {
    window.Intercom('show', {
      app_id: environment.intercomID,
    });
  }

  public shutdown(): void {
    window.Intercom('shutdown');
  }
}

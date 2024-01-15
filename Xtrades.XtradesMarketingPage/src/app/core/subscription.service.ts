import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  constructor(public httpService: HttpClient) {}

  saveSubscriber(email: string): Promise<any> {
    return firstValueFrom(
      this.httpService.post(`https://app.xtrades.net/api/v2/MailingList/add/${email}`, {}));
  }
}

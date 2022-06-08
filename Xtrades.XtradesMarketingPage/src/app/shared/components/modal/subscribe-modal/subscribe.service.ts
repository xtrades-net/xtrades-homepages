import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Utils } from 'src/app/utils/utils';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  mailChimpEndpoint = `${
    Utils.isDevOrLocalhost()
      ? 'https://xtrades.us2.list-manage.com/subscribe/post-json?u=8240d0edce3faaa377adab2bf&amp;id=9a827ae35e'
      : 'https://xtrades.us2.list-manage.com/subscribe/post-json?u=8240d0edce3faaa377adab2bf&amp;id=9a827ae35e'
  }`;

  constructor(private http: HttpClient) {}

  subscribeToList(email: string) {
    const group = Utils.isDevOrLocalhost()
      ? 'group[45597][1]'
      : 'group[88179][1]';
    const params = new HttpParams()
      .set('EMAIL', email)
      .set(group, '1')
      .set('b_123abc123abc123abc123abc123abc123abc', '');
    const mailChimpUrl = `${this.mailChimpEndpoint}&${params.toString()}`;
    return this.http.jsonp(mailChimpUrl, 'c');
  }

  subscribeToEmailList(email: string) {
    const group = Utils.isDevOrLocalhost()
      ? 'group[45597][1]'
      : 'group[88179][1]';
    const params = new HttpParams()
      .set('EMAIL', email)
      .set(group, '1')
      .set('b_123abc123abc123abc123abc123abc123abc', '');
    const mailChimpUrl = `${this.mailChimpEndpoint}&${params.toString()}`;
    return this.http.jsonp(mailChimpUrl, 'c');
  }

  subscribeToMainHomepageList(email: string) {
    const group = Utils.isDevOrLocalhost()
      ? 'group[88179][2]'
      : 'group[88179][2]';

    const params = new HttpParams()
      .set('EMAIL', email)
      .set(group, '1')
      .set('b_123abc123abc123abc123abc123abc123abc', '');
    const mailChimpUrl = `${this.mailChimpEndpoint}&${params.toString()}`;
    return this.http.jsonp(mailChimpUrl, 'c');
  }
}

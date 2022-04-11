import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Utils } from 'src/app/utils/utils';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  mailChimpEndpoint = `${
    Utils.isLocalhost()
      ? '/mailchimp'
      : 'https://gmail.us14.list-manage.com/subscribe'
  }/post-json?u=d15f69d16a62c78740028c34f&id=124ad0906a`;
  constructor(private http: HttpClient) {}

  subscribeToList(email: string) {
    const params = new HttpParams()
      .set('EMAIL', email)
      .set('b_123abc123abc123abc123abc123abc123abc', '');
    const mailChimpUrl = `${this.mailChimpEndpoint}&${params.toString()}`;
    return this.http.jsonp(mailChimpUrl, 'c');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoleModel } from '@core/models/ranked-trader.model';

@Injectable({
  providedIn: 'root',
})
export class RankedTradersService {
  constructor(private http: HttpClient) {}

  public getRankedTraders(): Observable<RoleModel[]> {
    return this.http.get<RoleModel[]>(
      'https://app.xtrades.net/api/v2/Traders/ranked'
    );
  }
}

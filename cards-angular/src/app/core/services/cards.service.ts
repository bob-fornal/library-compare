
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import config from '@core/constants/config.json';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(
    public http: HttpClient
  ) { }

  getCardsConfig = async (): Promise<any> => {
    const url: string = config.paths.cards;
    return this.http.get(url).toPromise();
  }

}

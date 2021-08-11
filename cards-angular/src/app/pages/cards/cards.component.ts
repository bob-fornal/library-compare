import { Component } from '@angular/core';

import { CardsService } from '@core/services/cards.service';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  cards: Array<Array<string>> = [];

  path: string = '';
  back: string = '';
  show: boolean = false;

  constructor(
    public cardsService: CardsService
  ) {
    this.init();
  }

  init = async () => {
    const structure: any = await this.cardsService.getCardsConfig();
    
    this.path = '/assets/images/';
    this.back = structure.back + structure.format;

    structure.type.forEach((cardType: string) => {
      let type: Array<string> = [];
      structure.descriptor.forEach((desc: string) => {
        type.push(`${ cardType }-${ desc }${ structure.format }`);
      });
      this.cards.push(type);
    });
  };

}

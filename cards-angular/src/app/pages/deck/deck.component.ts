import { Component } from '@angular/core';

import { CardsService } from '@core/services/cards.service';
import { ShufflerService } from '@core/services/shuffler.service';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent {
  
  cards: Array<string> = [];

  path: string = '';
  back: string = '';

  topCardIndex: number = 0;
  topCardFront: string = '';
  topCardShow: boolean = false;

  constructor(
    public cardsService: CardsService,
    public shuffler: ShufflerService
  ) {
    this.init();
  }

  init = async () => {
    let cards: Array<string> = [];
    const structure: any = await this.cardsService.getCardsConfig();
    
    this.path = '/assets/images/';
    this.back = structure.back + structure.format;

    structure.type.forEach((cardType: string) => {
      structure.descriptor.forEach((desc: string) => {
        cards.push(`${ cardType }-${ desc }${ structure.format }`);
      });
    });

    this.cards = this.shuffler.shuffle(cards);

    this.setTopCard();
  };

  setTopCard = () => {
    this.topCardFront = this.cards[this.topCardIndex];
    this.topCardShow = false;
  };

  onVisibleClickFn = () => {
    this.topCardIndex = (this.topCardIndex === this.cards.length - 1) ? 0 : this.topCardIndex + 1;
    setTimeout(this.setTopCard, 1000);
  };

}

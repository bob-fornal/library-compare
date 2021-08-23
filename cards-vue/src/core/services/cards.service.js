
import axios from 'axios';
import config from '@Core/constants/config.json';

class CardsService {

  constructor() { }
 
  getCardsConfig = async () => {
    const url = config.paths.cards;
    return (await axios.get(url)).data;
  }
}

export default new CardsService();

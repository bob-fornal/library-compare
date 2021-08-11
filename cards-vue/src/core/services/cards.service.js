
import axios from 'axios';
import config from '../constants/config.json';

class CardsService {

  constructor() { }
 
  getCardsConfig = async () => {
    const url = config.paths.cards;
    console.log(url);
    return (await axios.get(url)).data;
  }
}

export default new CardsService();

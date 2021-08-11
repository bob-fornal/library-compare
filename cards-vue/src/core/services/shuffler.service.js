
class ShufflerService {

  constructor() { }
 
  shuffle = array => {
    var currentIndex = array.length,  randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [ array[currentIndex], array[randomIndex] ] = [ array[randomIndex], array[currentIndex] ];
    }

    return array;
  }

}

export default new ShufflerService();

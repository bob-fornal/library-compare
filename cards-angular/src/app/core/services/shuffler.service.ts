import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShufflerService {

  constructor() { }

  shuffle = (array: Array<string>): Array<string> => {
    var currentIndex = array.length,  randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [ array[currentIndex], array[randomIndex] ] = [ array[randomIndex], array[currentIndex] ];
    }
  
    return array;
  }

}

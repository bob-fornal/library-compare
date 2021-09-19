
if (core === undefined) {
  var core = {};
}

core.topCard = {
  index: 0,
  front: '',
  show: false,
  onVisibleClick: () => {
    core.topCard.index = (core.topCardIndex === core.data.cards.length - 1) ? 0 : core.topCard.index + 1;
    setTimeout(core.setTopCard, 1000);
  }
};

core.processDeck = () => {
  let cards = [];

  core.data.path = 'https://res.cloudinary.com/bob-fornal/image/upload/w_100/edje-cards/';
  core.data.back = core.structure.back + core.structure.format;

  core.structure.type.forEach(cardType => {
    core.structure.descriptor.forEach(desc => {
      cards.push(`${ cardType }-${ desc }${ core.structure.format }`);
    });
  });

  core.data.cards = core.shuffle(cards);

  core.setTopCard();
};

core.setTopCard = () => {
  core.topCard.front = core.data.cards[core.topCard.index];
  core.topCard.show = false;
  
  const file = core.data.path + core.topCard.front;
  $('.deck-wrapper .front').attr('src', file);
};

core.displayDeck = () => {
  const outer = $('<div/>', { class: 'deck-wrapper' });
  const inner = $('<span/>', { class: 'stacked-deck' });

  const { element: back, id: backId } = core.singleCard({
    class: 'deck-card',
    back: core.data.back,
    front: core.data.back,
    path: core.data.path
  });
  const { element: front, id: frontId } = core.singleCard({
    back: core.data.back,
    front: core.topCard.front,
    path: core.data.path,
    show: core.topCard.show,
    onVisibleClick: core.topCard.onVisibleClick
  });
  inner.append(back).append(front);
  outer.append(inner);

  $('#wrapper').append(outer);

  core.processToggleShowIds([ frontId ]);
};

core.shuffle = (array) => {
  var currentIndex = array.length,  randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [ array[currentIndex], array[randomIndex] ] = [ array[randomIndex], array[currentIndex] ];
  }

  return array;
};

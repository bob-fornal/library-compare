
if (core === undefined) {
  var core = {};
}

core.processCards = () => {
  core.data.path = '/assets/images/';
  core.data.back = core.structure.back + core.structure.format;

  console.log(core.structure);
  core.structure.type.forEach(cardType => {
    let type= [];
    core.structure.descriptor.forEach(desc => {
      type.push(`${ cardType }-${ desc }${ core.structure.format }`);
    });
    core.data.cards.push(type);
  });
};

core.displayCards = () => {
  const ids = [];
  const outer = $('<div/>', { class: 'cards-wrapper' });
  
  core.data.cards.forEach(type => {
    const inner = $('<div/>', { class: 'type-of-card' });
    type.forEach(card => {
      const { element, id } = core.singleCard({
        back: core.data.back,
        front: card,
        path: core.data.path,
        show: false
      });
      inner.append(element);
      ids.push(id);
    });
    outer.append(inner);
  });

  $('#wrapper').append(outer);

  core.processToggleShowIds(ids);
};

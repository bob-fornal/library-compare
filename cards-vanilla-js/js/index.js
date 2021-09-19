
if (core === undefined) {
  var core = {};
}

core.data = {
  cards: [],
  path: '',
  back: ''
};
core.type = '';
core.structure = {};
core.ids = {};

core.init = (type = 'cards') => {
  core.type = type;
  core.getStructure();
};
  
core.getStructure = () => {
  $.get('../../assets/cards.json', (response) => {
    core.structure = response;
    switch (true) {
      case (core.type === 'cards'):
        core.processCards();
        core.displayCards();
        break;
      case (core.type === 'deck'):
        core.processDeck();
        core.displayDeck();
        break;
    }
  });
};

core.getId = (id) => id.replace('.', '--');

core.singleCard = (params) => {
  const disabled = (params.hasOwnProperty('disabled') && params.disabled === true);
  const show = (params.hasOwnProperty('show') && params.show === true);
  const hasClass = params.hasOwnProperty('class');

  const front = core.data.path + params.front;
  const back = core.data.path + params.back;
  
  const id = core.getId(params.front);
  const classes = [ 'card' ];
  if (hasClass === true) classes.push(params.class);
  if (disabled === true) classes.push('disabled');
  if (show === true) classes.push('show');

  const outer = $('<div/>', { id: id, class: classes.join(' ') });
  const innerContent = $('<div/>', { class: 'content' });
  const innerFront = $('<img/>', { src: front, class: 'front' });
  const innerBack = $('<img/>', { src: back, class: 'back' });
  innerContent.append(innerFront).append(innerBack);
  outer.append(innerContent);

  core.ids[id] = {
    disabled: disabled,
    onVisibleClick: params?.onVisibleClick
  };

  return { element: outer, id: id };
};

core.processToggleShowIds = (ids) => {
  ids.forEach(id => core.setupToggleShow(id));
};

core.setupToggleShow = (id) => {
  const idHandler = `#wrapper #${ id }`;
  $(idHandler).on('click', core.toggleShow);
};

core.toggleShow = (event) => {
  const id = event.currentTarget.id;
  const element = $('#' + id);
  if (core.ids[id].disabled === true) return;
  element.toggleClass('show');
  if (element.hasClass('show') === false && typeof core.ids[id].onVisibleClick === 'function') {
    core.ids[id].onVisibleClick(id);
  }
};

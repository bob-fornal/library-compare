
if (core === undefined) {
  var core = {};
}

core.header = {
  init: () => {
    $('#header').load('../../shared/header.html');
  }
};
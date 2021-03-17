import leaders from './components/leaders.pug';
// import DynamicAdapt from './DynamicAdapt';

import './styles';
// import './workshop.scss';

// window.Person = Person;
// document.addEventListener('DOMContentLoaded', () => {
//   const da = new DynamicAdapt();
// });

window.renderTemplate = function renderTemplate(alias, data) {
  let slide;

  if (alias === 'leaders') {
    slide = leaders(data);
  }

  return slide;
};

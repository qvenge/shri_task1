import SlideTemplate from './SlideTemplate';
import Leaders from './Leaders';

import Person from './Person';

import './style.scss';
import './workshop.scss';

window.Person = Person;

window.renderTemplate = function renderTemplate(alias, data) {
  let slideContent;

  if (alias === 'leaders') {
    slideContent = new Leaders(data);
  }

  const slideTemplate = new SlideTemplate({
    title: data.title,
    subtitle: data.subtitle,
    content: slideContent,
  });

  return slideTemplate.getHtmlElement().outerHTML;
};

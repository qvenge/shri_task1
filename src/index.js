import leadersTemplate from './components/leaders-slide/leaders-slide.pug';
import voteTemplate from './components/vote-slide/vote-slide.pug';
import chartTemplate from './components/chart-slide/chart-slide.pug';
import diagramTemplate from './components/diagram-slide/diagram-slide.pug';
import activityTemplate from './components/activity-slide/activity-slide.pug';
import './styles';

const templates = {
  leaders: leadersTemplate,
  vote: voteTemplate,
  chart: chartTemplate,
  diagram: diagramTemplate,
  activity: activityTemplate,
};

window.renderTemplate = function renderTemplate(alias, data) {
  const template = templates[alias];

  if (!template) {
    throw Error('Slide not found');
  }

  return template(data);
};

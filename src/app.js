import angular from 'angular';

import '../static/styles/main.scss';

function requireTemplates() {
  const templates = require.context('ngtemplate?relativeTo=static!../static/', true, /^(.*?\/)?[^_]\w*\.(jade|pug)$/);

  templates.keys().forEach(function(key) {
    console.log(key);
    let tmpl = templates(key);
  });
}

requireTemplates();

const myApp = angular.module('app', [
  'ui.router',
  'ngAnimate',
  'ngStorage',
  'ngResource',
  'ngSanitize',
  'ngTouch',
]);

import EmberRouter from '@ember/routing/router';
import config from 'ember-octane-4x4/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});

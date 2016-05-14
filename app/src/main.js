import {logger, angular} from 'rbarilani/jspm-angular-1-bundle';

let log = logger('app');

angular
  .module('jspm-angular-1-app')
  .run(($rootScope) => {
    $rootScope.text = 'Hello Angular!';
  });

log.info('The app is using the bundle!');

import {angular, logger} from 'rbarilani/jspm-angular-1-bundle';

let log = logger('plugin-hello-world');

log
  .info('Hey! I\'m using the bundle too!')
  .debug('Angular is exposed on window context:', window.angular);

const ngModule = angular.module('jspm-angular-1-bundle-hello-world', []);

ngModule.run(function ($rootScope, $timeout) {
  $timeout(function () {
    $rootScope.text += ' Hello from jspm-angular-1-bundle-hello-world-plugin!';
  }, 1000);
});

export default ngModule;

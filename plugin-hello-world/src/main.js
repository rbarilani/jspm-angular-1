import bundle from 'rbarilani/jspm-angular-1-bundle';

let logger = bundle.logger('plugin-hello-world');

logger
  .info('Hey! I\'m using the bundle too:', bundle)
  .debug('Angular is exposed on window context:', window.angular);

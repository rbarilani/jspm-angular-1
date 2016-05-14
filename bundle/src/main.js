import * as angular from 'angular';
import logger from './logger';

if(typeof window === 'object') {
	window.angular = angular;
}

export default {
	angular: angular,
	logger: logger
};

export {logger, angular};

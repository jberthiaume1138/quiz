import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './components/Layout';
import Home from './components/Home';

const componentRoutes = {
	component: Layout,
	path: '/',
	indexRoute: { component: Home },
	childRoutes: [
		{
			path: 'quiz',
			getComponent(location, cb) {
				System.import('./components/Quiz')
					.then(module => cb(null, module.default));
			}
		},
		{
			path: 'finish',
			getComponent(location, cb) {
				System.import('./components/Finish')
					.then(module => cb(null, module.default));
			}
		}
	]
};

const Routes = () => {
	return (
		<Router history={hashHistory} routes={componentRoutes} />
	);
};

export default Routes;

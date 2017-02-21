import React from 'react';
import ReactDOM from 'react-dom';

import normalize from './css/normalize.css';

import Router from './Router';

class Thing extends React.Component {
	render() {
		return (
			<Router />
		);
	}
}

ReactDOM.render(<Thing />, document.getElementById('app'));

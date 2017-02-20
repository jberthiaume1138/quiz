import React from 'react';
import ReactDOM from 'react-dom';

import normalize from './css/normalize.css';
import style from './css/style.scss';

class Thing extends React.Component {
	render() {
		return (
			<h1>Hello World</h1>
		);
	}
}

ReactDOM.render(<Thing />, document.getElementById('app'));

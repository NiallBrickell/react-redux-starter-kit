import React, { PropTypes } from 'react';

import Header from '../Header/Header';
import NavBar from '../../containers/NavBar/NavBar';

import * as classes from './App.scss';

// Connected from App container
export const App = ({children}) => (
	<div>
		<Header />
		<NavBar />
		<div className={classes.mainContainer}>
			{children}
		</div>
	</div>
);

export default App;
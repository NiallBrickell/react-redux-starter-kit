import React from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './Header.scss';

export const Header = () => (
<div className={classes.header}>
	<IndexLink to='/' className={classes.link} activeClassName={classes.activeRoute}>
		<h1 className={classes.headerText}>React-Redux Starter Kit</h1>
	</IndexLink>
</div>
);

export default Header
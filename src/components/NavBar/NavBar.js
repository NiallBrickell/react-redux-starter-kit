import React from 'react';
import { IndexLink, Link } from 'react-router';
import * as classes from './NavBar.scss';
import classNames from 'classnames';

export const NavBar = ({ showMobNav, showHideMobNav}) => {
	var containerClasses = classNames({
      [classes.container]: true,
      [classes.open]: showMobNav
    });

	return (
		<div className={classes.navBar}>
			<div className={classes.mobNavBtn} onClick={showHideMobNav}>
				<i className="fa fa-bars"></i>
			</div>
			<div className={containerClasses}>
			    <IndexLink to='/' className={classes.link} activeClassName={classes.activeRoute}>
			      HOME
			    </IndexLink>
			    <Link to='/counter' className={classes.link} activeClassName={classes.activeRoute}>
			      COUNTER
			    </Link>
			    <Link to='/blog' className={classes.link} activeClassName={classes.activeRoute}>
			      BLOG
			    </Link>
		    </div>
	    </div>
	);
}

NavBar.propTypes = {
	showMobNav: React.PropTypes.bool.isRequired,
	showHideMobNav: React.PropTypes.func.isRequired
}

export default NavBar;
import React from 'react';
import { NavBar } from 'components/NavBar/NavBar';
import { IndexLink, Link } from 'react-router';
import { shallow } from 'enzyme';

describe('(Components)', () => {
	describe('(Component) NavBar', () => {
		let _wrapper;

		beforeEach(() => {
			_wrapper = shallow(<NavBar showMobNav={false} showHideMobNav={() => 0}/>);
		});

		describe('Navigation links...', () => {
			it('Should render an IndexLink to home', () => {
				expect(_wrapper.containsMatchingElement(<IndexLink to='/'>HOME</IndexLink>)).to.be.true;
			});

			it('Should render an Link to Counter route', () => {
				expect(_wrapper.containsMatchingElement(<Link to='/counter'>COUNTER</Link>)).to.be.true;
			});
		});
	});
});

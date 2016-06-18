import React from 'react';
import { render } from 'enzyme';
import { Home } from 'components/Home/Home';

describe('(Components)', () => {
	describe('Home', () => {
		let _component;

		beforeEach(() => {
			_component = render(<Home />);
		});

		it('Renders a welcome message', () => {
			const welcome = _component.find('h1');
			expect(welcome).to.exist;
			expect(welcome.text()).to.match(/Welcome!/);
		});
	});
});

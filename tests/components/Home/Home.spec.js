import React from 'react'
import { Home } from 'components/Home/Home'
import { render } from 'enzyme'

describe('(View) Home', () => {
  let _component

  beforeEach(() => {
    _component = render(<Home />)
  })

  it('Renders a welcome message', () => {
    const welcome = _component.find('h1')
    expect(welcome).to.exist
    expect(welcome.text()).to.match(/Welcome!/)
  })

})

import React from 'react'
import Header from '../../components/Header/Header'
import classes from './App.scss'
import '../../styles/core.scss'

export const App = ({ children }) => (
  <div className='container text-center'>
    <Header />
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
)

App.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default App

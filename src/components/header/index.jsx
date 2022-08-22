import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css';


function Header( {transparent} ) {
  return (
    <header className="header headerTransparent">
      <div className="logoContainer" >
        <h1><Link to='/'>&#60;&#60;EndL;</Link></h1>
      </div>

      <div className="devCorner">
        <a href="https://github.com/goodyboy301/endl" target='_blank' rel='noreferrer noopener'><i className='fab fa-github'></i></a>
      </div>
    </header>
  )
}

export default Header

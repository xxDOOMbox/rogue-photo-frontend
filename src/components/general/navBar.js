import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
      <header>
        <ul>
          <li><NavLink to='/galleries'>Galleries</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><a href='https://www.instagram.com/roguephotonyc/' target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><NavLink to='/donate'>Donate</NavLink></li>
        </ul>
      </header>
  )
}

NavBar.defaultProps = {

}

export default NavBar

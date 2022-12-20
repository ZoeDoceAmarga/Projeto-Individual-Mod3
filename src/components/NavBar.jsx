import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <h2>
        <Link to = {`/`}>Hamburgueria Oba Oba </Link>
      </h2>
      <ul>
        <li>
          <Link to = {`/`}>Inicio</Link>
        </li>
        <li>
          <Link to = {`/new`} className= "new-btn">
          Delivery
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

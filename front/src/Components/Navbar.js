import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

 const Navbar = () => {
    const [menuHeight, setMenuHeight] = useState(0);
    const toggleMenu = () => {
      setMenuHeight(menuHeight === 0 ? 300 : 0);
    };
  return (
<>
<nav>
        <div class="logo">
            <h2>RXDform</h2>
        </div>
        <ul id="menuList">
            <li><a href="/">Home</a></li>
            <li><a href="/">À PROPOS</a></li>
            <li><a href="/">Sondage</a></li>
        </ul>
        <div  className='logbnt'>
            <NavLink to="/register">S'inscrire</NavLink>
            </div>
        <div id="menuList" style={{ maxHeight: `${menuHeight}px`, overflow: 'hidden' }}>
        </div>
        <div class="menu-icon">
            <i class="fa-solid fa-bars" onClick={toggleMenu}></i>
        </div>
    </nav>

       </>
    
  )
}

export default Navbar;
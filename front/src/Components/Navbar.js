import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useSelector,useDispatch  } from 'react-redux';
import { NavLink} from 'react-router-dom';
import { logout } from '../redux/actions/userAction';

 const Navbar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  

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
            <li><a href="/surveyCreator">Sondage</a></li>
        </ul>
        <div  className='logbnt'>
        {userInfo && userInfo ?(
        <NavDropdown title={userInfo.name} className=''>
        <NavLink className="nav-link" to="/profil">
          <NavDropdown.Item href="/profil">profil</NavDropdown.Item>
        </NavLink>
        <NavDropdown.Item onClick={logoutHandler}>
          Deconnection
        </NavDropdown.Item>
      </NavDropdown>
        ):(
            <NavLink to="/register">S'inscrire</NavLink>                     
)}
</div>
{/* <div className='logbnt'>
<NavLink to="/login">Login</NavLink> 
      </div> */}

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

import { useState } from 'react';
import { Link, NavLink } from 'react-router';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const checkMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <label className="navbar-toggle burger lg:hidden block">
        <input type="checkbox" id="burger" onChange={checkMenu} />
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav className={`header-nav flex-1 flex justify-between ${isMenuOpen ? 'nav-active' : ''}`}>
        <ul className="nav navbar-nav flex-child-menu menu-left items-center">
          <li><NavLink to="/" className='reversed-link'>Home</NavLink></li>
          <li><NavLink to="/movies" className='reversed-link'>Movies</NavLink></li>
          <li><NavLink to="/celebrities" className='reversed-link'>Celebrities</NavLink></li>
          <li><NavLink to="/news" className='reversed-link'>News</NavLink></li>
          <li><NavLink to="#" className='reversed-link'>Community</NavLink></li>
        </ul>
        <ul className="nav navbar-nav flex-child-menu menu-right items-center">
          <li><NavLink to="#" className='reversed-link'>Help</NavLink></li>
          <li className="loginLink"><NavLink to="#" className='reversed-link'>Login</NavLink></li>
          <li className="btn signupLink"><Link to="#">Sign up</Link></li>
        </ul>
      </nav>
    </>
  );
}

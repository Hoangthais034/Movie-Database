
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const checkMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    console.log(isMenuOpen)
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/celebrities">Celebrities</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="#">Community</Link></li>
        </ul>
        <ul className="nav navbar-nav flex-child-menu menu-right items-center">
          <li><Link to="#">Help</Link></li>
          <li className="loginLink"><Link to="#">Login</Link></li>
          <li className="btn signupLink"><Link to="#">Sign up</Link></li>
        </ul>
      </nav>
    </>
  );
}

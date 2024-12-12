
import { useState } from 'react';
import { Link } from 'react-router';

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
          <li><Link to="/" className='reversed-link'>Home</Link></li>
          <li><Link to="/movies" className='reversed-link'>Movies</Link></li>
          <li><Link to="/celebrities" className='reversed-link'>Celebrities</Link></li>
          <li><Link to="/news" className='reversed-link'>News</Link></li>
          <li><Link to="#" className='reversed-link'>Community</Link></li>
        </ul>
        <ul className="nav navbar-nav flex-child-menu menu-right items-center">
          <li><Link to="#" className='reversed-link'>Help</Link></li>
          <li className="loginLink"><Link to="#" className='reversed-link'>Login</Link></li>
          <li className="btn signupLink"><Link to="#">Sign up</Link></li>
        </ul>
      </nav>
    </>
  );
}

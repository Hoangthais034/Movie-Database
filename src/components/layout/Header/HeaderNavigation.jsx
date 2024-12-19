import { useState } from "react";
import { Link, NavLink } from "react-router";
import { FlexBox } from "../../../shared/styles/LayoutModels/LayoutModels";

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
      <FlexBox element="nav" flex="1" className={`header-nav`} aria-hidden={`${isMenuOpen ? "false" : "true"}`}>
        <FlexBox flexDirection={{ default: "column", lg: "row" }} width="100%" justifyContent="space-between" className="header-nav-inner">
          <FlexBox element="ul" flexDirection={{ default: "column", lg: "row" }} alignItems={{ default: "flex-start", lg: "center" }} gap={{ default: "12px", lg: "0" }} className="nav navbar-nav">
            <li><NavLink to="/" className="reversed-link">Home</NavLink></li>
            <li><NavLink to="/movies" className="reversed-link">Movies</NavLink></li>
            <li><NavLink to="/celebrities" className="reversed-link">Celebrities</NavLink></li>
            <li><NavLink to="/news" className="reversed-link">News</NavLink></li>
            <li><NavLink to="#" className="reversed-link">Community</NavLink></li>
          </FlexBox>
          <FlexBox element="ul" flexDirection={{ default: "column", lg: "row" }} alignItems={{ default: "flex-start", lg: "center" }} gap={{ default: "12px", lg: "0" }} className="nav navbar-nav items-center">
            <li><NavLink to="#" className="reversed-link">Help</NavLink></li>
            <li className="loginLink"><NavLink to="#" className="reversed-link">Login</NavLink></li>
            <li className="btn signupLink"><Link to="#">Sign up</Link></li>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
}

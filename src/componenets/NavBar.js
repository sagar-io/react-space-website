// import logo from "My Resources/assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import screenWidth from "./Technology";
import React from "react";


const NavBar = () => {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [isMenuClicked, setIsMenuClicked] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  const ShowState = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
    };
  };

  function handleMenuClick() {
    setIsMenuClicked(prevState => !prevState);
  }

  return (
    <nav className="main-nav">
      <img
        className="main-logo"
        src="My Resources/assets/shared/logo.svg"
        alt="Logo"
      />

      <div className="faded nav-strip"></div>

      {screenWidth < 480 && (
          <img
            className="hamburger-logo"
            onClick={handleMenuClick}
            src="My Resources/assets/shared/icon-hamburger.svg"
            alt="Logo"
          />
      )}

      <div
        className={
          (screenWidth > 480 )
            ? "nav-elements"
            :
             (isMenuClicked) ? "nav-elements mobile-nav-elements active" : "nav-elements mobile-nav-elements"
        }
      >
        <ul>
         {screenWidth < 480 && (<div className="close-btn" onClick={handleMenuClick}>
            <img src="My Resources/assets/shared/icon-close.svg"/>
          </div>)}
          <li>
            <NavLink to="/" className="nav-element" style={ShowState}>
              <span className="bold  nav-numbering">00</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Destination"
              className="nav-element"
              style={ShowState}
            >
              <span className="bold nav-numbering">01</span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/Crew" className="nav-element" style={ShowState}>
              <span className="bold nav-numbering">03</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/Technology" className="nav-element" style={ShowState}>
              <span className="bold nav-numbering">04</span> Technology
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

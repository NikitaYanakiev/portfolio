import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import logo_white from "../../shared/assets/images/logo_white.png";
import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${scrolled ? "scrolled" : ""} ${menuOpen ? "active" : ""}`}>
      <div className="header__layout"></div>
      <div className="header__container">
        <Link to="/portfolio" className="header__logo">
          <img className="header__logo header__logo_white" src={logo_white} alt="logo" />
        </Link>
        <nav className={`header__nav ${menuOpen ? "active" : ""}`}>
          <ul className="header__list">
            <li className="header__item">
              <Link
                to="/portfolio"
                className={`header__link ${isActive("/portfolio") ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="header__item">
              <Link
                to="/about"
                className={`header__link ${isActive("/about") ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                About Me
              </Link>
            </li>
            <li className="header__item">
              <Link
                to="/works"
                className={`header__link ${isActive("/works") ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                My Works
              </Link>
            </li>
            <li className="header__item">
              <Link
                to="/contact"
                className={`header__button ${isActive("/contact") ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <input className="checkbox" type="checkbox" checked={menuOpen} readOnly />
          <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
            <path className="lineTop line" strokeLinecap="round" strokeWidth="4" stroke="black" d="M6 11L44 11"></path>
            <path className="lineMid line" strokeLinecap="round" strokeWidth="4" stroke="black" d="M6 24H43"></path>
            <path className="lineBottom line" strokeLinecap="round" strokeWidth="4" stroke="black" d="M6 37H43"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;

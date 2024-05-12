import "./MobileNav.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen && "active"}`} onClick={toggleMenu}>
        <div className="mobile-menu-container">
          <img className="logo" src="./assets/images/logo.png" />
          <ul>
            <li>
              <Link to="/" className="menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/skills" className="menu-item">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/workexperience" className="menu-item">
                Work Experience
              </Link>
            </li>
            <li>
              <Link to="/contactme" className="menu-item">
                Contact Me
              </Link>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default MobileNav;

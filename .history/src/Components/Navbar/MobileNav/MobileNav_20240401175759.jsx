import "./MobileNav.css";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const MobileNav = ({ isOpen, handleOpen }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="mobile-menu-container">
          <img className="logo" src="./assets/images/logo.png" />
          <ul>
            <li>
              <a className="menu-item" href="">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Work Experience
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
          <button
            className="menu-btn"
            onClick={() => {
              handleOpen();
            }}
          >
            {isOpen ? <IoClose size="1.6rem" /> : <FaBars size="1.2rem" />}
            {/* <FaBars size="1.2rem" /> */}
          </button>
        </div>
      </div>
    </>
  );
};

MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleOpen: PropTypes.bool.isRequired,
};

export default MobileNav;

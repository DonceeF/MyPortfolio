import { useState } from "react";
import "./Navbar.css";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./assets/images/logo.png" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{/* <Link to="/skills">Skills</Link> */}</li>
            <li>{/* <Link to="/workexperience">Work Experience</Link> */}</li>
            <li>{/* <Link to="/contactme">Contact Me</Link> */}</li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
          <button
            className="menu-btn"
            onClick={() => {
              toggleMenu();
            }}
          >
            {openMenu ? <IoClose size="1.6rem" /> : <FaBars size="1.2rem" />}
            {/* <FaBars size="1.2rem" /> */}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

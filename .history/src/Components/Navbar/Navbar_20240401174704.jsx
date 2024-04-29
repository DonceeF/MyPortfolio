import { useState } from "react";
import "./Navbar.css";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleOpen={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
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

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./assets/images/logo.png" alt="" />
          <ul></ul>
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;

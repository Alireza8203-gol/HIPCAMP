import logo from "@/assets/Images/svgs/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav__wrapper">
          <a href="#" className="app-logo">
            <img className="app-logo__img" src={logo} alt="app-logo" />
          </a>
          <ul className="menu">
            <li className="menu__item">
              <a href="#" className="menu__link menu__link--active">
                Home
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Destination
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Near me
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Events
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Blog
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Gallery
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                About
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-menu">
          <ul className="mobile-menu">
            <li className="mobile-menu__item">
              <a href="#" className="mobile-menu__link">
                Home
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="#" className="mobile-menu__link">
                Destination
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="#" className="mobile-menu__link">
                Near me
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="#" className="mobile-menu__link">
                Events
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="#" className="mobile-menu__link">
                Blog
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="#" className="mobile-menu__link">
                Gallery
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="#" className="mobile-menu__link">
                About
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="#" className="mobile-menu__link">
                Contact us
              </a>
            </li>
          </ul>
          <div className="nav-menu__links">
            <a href="#" className="nav-menu__link">
              Sign up
            </a>
            <a href="#" className="nav-menu__link nav-menu__link--border">
              Sign in
            </a>
          </div>
        </div>
        <div className="nav__links">
          <a href="#" className="nav__link">
            Sign up
          </a>
          <a href="#" className="nav__link nav__link--border">
            Sign in
          </a>
        </div>
        <div className="nav__btn">
          <span className="nav__btn-line"></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

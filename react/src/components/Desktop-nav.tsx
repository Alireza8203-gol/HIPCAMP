import logo from "@/assets/Images/svgs/logo.svg";
import MenuList from "@/components/MenuList.tsx";

const DesktopNav = () => {
  return (
    <div className="nav__wrapper">
      <a href="#" className="app-logo">
        <img className="app-logo__img" src={logo} alt="app-logo" />
      </a>
      <ul className="menu">
        <MenuList isMobileMenu={false} />
      </ul>
    </div>
  );
};

export default DesktopNav;

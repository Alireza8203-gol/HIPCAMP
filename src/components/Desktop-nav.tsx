import MenuList from "@/components/MenuList.tsx";

const DesktopNav = () => {
  return (
    <div className="nav__wrapper">
      <a href="#" className="app-logo">
        <img
          className="app-logo__img"
          src="/Images/svgs/logo.svg"
          alt="app-logo"
        />
      </a>
      <ul className="menu">
        <MenuList isMobileMenu={false} />
      </ul>
    </div>
  );
};

export default DesktopNav;

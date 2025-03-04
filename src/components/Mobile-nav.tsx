import MenuList from "@/components/MenuList.tsx";

// Types
interface Props {
  isOpen: boolean;
}

const MobileNav = ({ isOpen }: Props) => {
  return (
    <div className="nav-menu" style={{ left: isOpen ? "0" : "-29rem" }}>
      <ul className="mobile-menu">
        <MenuList isMobileMenu={true} />
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
  );
};

export default MobileNav;

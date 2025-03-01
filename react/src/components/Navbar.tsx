import { useState } from "react";
import MobileNav from "@/components/Mobile-nav.tsx";
import DesktopNav from "@/components/Desktop-nav.tsx";
import HamMenuBtn from "@/components/HamMenu-btn.tsx";
import UserAccount from "@/components/UserAccount.tsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="nav">
        <DesktopNav />
        <MobileNav isOpen={isOpen} />
        <UserAccount />
        <HamMenuBtn
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </nav>
    </>
  );
};

export default Navbar;

import Navbar from "@/components/Navbar.tsx";
import UserAccount from "@/components/UserAccount.tsx";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Navbar />
        <UserAccount />
      </div>
    </header>
  );
};

export default Header;

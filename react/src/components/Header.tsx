import Navbar from "@/components/Navbar.tsx";
import Hero from "@/components/Hero.tsx";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Navbar />
        <Hero />
      </div>
    </header>
  );
};

export default Header;

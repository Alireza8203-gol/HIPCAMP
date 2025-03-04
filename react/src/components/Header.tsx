import Hero from "@/components/Hero.tsx";
import Navbar from "@/components/Navbar.tsx";

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

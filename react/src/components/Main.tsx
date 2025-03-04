import Services from "@/components/Services.tsx";
import NewsLetter from "@/components/NewsLetter.tsx";
import Destinations from "@/components/Destinations.tsx";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <Services />
        <Destinations />
        <NewsLetter />
      </div>
    </main>
  );
};

export default Main;

import Services from "@/components/Services.tsx";
import Destinations from "@/components/Destinations.tsx";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <Services />
        <Destinations />
      </div>
    </main>
  );
};

export default Main;

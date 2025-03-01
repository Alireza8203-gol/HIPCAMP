import destinationSvg from "@/assets/Images/svgs/destination.svg";
import PlacesWrapper from "@/components/Places-wrapper.tsx";

const Destinations = () => {
  return (
    <section className="destinations">
      <img
        src={destinationSvg}
        alt="destinations-logo"
        className="destinations__logo"
      />
      <h2 className="destinations__title">Explore Destinations & Activities</h2>
      <PlacesWrapper />
    </section>
  );
};

export default Destinations;

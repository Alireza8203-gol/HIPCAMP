import PlacesWrapper from "@/components/Places-wrapper.tsx";

const Destinations = () => {
  return (
    <section className="destinations">
      <img
        src="/Images/svgs/destination.svg"
        alt="destinations-logo"
        className="destinations__logo"
      />
      <h2 className="destinations__title">Explore Destinations & Activities</h2>
      <PlacesWrapper />
      <button className="btn destinations__btn">View all</button>
    </section>
  );
};

export default Destinations;

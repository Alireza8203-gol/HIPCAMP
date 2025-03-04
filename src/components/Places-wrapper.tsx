import placesArr from "@/places-config.ts";
import PlaceCard from "@/components/Place-card.tsx";

const PlacesWrapper = () => {
  return (
    <div className="destinations__places">
      {placesArr.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
};

export default PlacesWrapper;

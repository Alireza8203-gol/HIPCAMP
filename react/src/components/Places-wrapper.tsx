import PlaceCard from "@/components/Place-card.tsx";
import placesArr from "@/places-config.ts";

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

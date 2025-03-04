import { useState } from "react";
import PlaceLikeIcon from "@/components/PlaceLikeIcon.tsx";

interface Place {
  id: number;
  title: string;
  price: number;
  caption: string;
  imgSrc: string;
}

interface Props {
  place: Place;
}

const PlaceCard = ({ place }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <div className="place">
      <div className="place__banner">
        <img src={place.imgSrc} alt={place.title} className="place__img" />
        <div
          className="place__like"
          onClick={() => {
            setIsLiked(!isLiked);
          }}
        >
          <PlaceLikeIcon isLiked={isLiked} />
        </div>
        <div className="place__price">
          <p className="place__price-text">${place.price}/night</p>
        </div>
      </div>
      <h3 className="place__title">{place.title}</h3>
      <p className="place__caption">{place.caption}</p>
      <a href="#" className="btn place__link">
        Read More
      </a>
    </div>
  );
};

export default PlaceCard;

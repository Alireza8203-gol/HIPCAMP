interface Props {
  title: string;
  imageSrc: string;
  caption: string;
}

const ServiceCard = (props: Props) => {
  return (
    <div className="service">
      <img className="service__img" src={props.imageSrc} alt="fire" />
      <h3 className="service__title">{props.title}</h3>
      <p className="service__caption">{props.caption}</p>
    </div>
  );
};

export default ServiceCard;

const PlaceLikeIcon = ({ isLiked }: { isLiked: boolean }) => {
  return (
    <div>
      <svg
        width="24.037"
        height="24.037"
        stroke="#E76F51"
        viewBox="0 0 24.037 24.037"
        className="place__like-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill={isLiked ? "#E76F51" : "#fff"}
      >
        <path
          id="Path_955"
          data-name="Path 955"
          transform="translate(2.716 20.496) rotate(-45)"
          d="M15.822,8.979v.029H4V-2.1A5.915,5.915,0,0,1,9.912-7.841a5.913,5.913,0,0,1,5.849,5.049,5.912,5.912,0,0,1,.061,11.772Z"
        />
      </svg>
    </div>
  );
};

export default PlaceLikeIcon;

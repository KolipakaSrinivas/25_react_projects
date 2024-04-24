import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  console.log("reating", rating);
  console.log("hover", hover);

  const handleClick = (getIndex) => {
    setRating(getIndex);
  };

  const handleMouseEnter = (getIndex) => {
    setHover(getIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inActive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={30}
          />
        );
      })}
    </div>
  );
}

export default StarRating;

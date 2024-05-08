import { useEffect } from "react";
import { useState } from "react";
import {
  BsArrowRightCircleFill,
  BsArrowLeftCircleFill
  // BsChatLeftDotsFill
} from "react-icons/bs";
import "./style.css";

const array = [
  {
    id: 0,
    download_url: ""
  },
  {
    id: 1,
    download_url: ""
  },
  {
    id: 2,
    download_url: ""
  },
  {
    id: 3,
    download_url: ""
  },
  {
    id: 4,
    download_url: ""
  }
];

function ImageSlider({ url = "", limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  async function fetchData(LINK) {
    try {
      setLoading(true);
      const response = await fetch(`${LINK}?page=1&limit=10`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
      // setImages(array);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchData(url);
    }
  }, [url]);

  const handlePrev = () => {
    setCurrentSlide(currentSlide == 0 ? images.length - 1 : currentSlide - 1);
    console.log(currentSlide);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide == images.length - 1 ? 0 : currentSlide + 1);
    console.log(currentSlide);
  };
  if (loading) {
    return <div>Data Loading...</div>;
  }

  if (errorMsg) {
    return <div>Error {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrev}
      />
      {images && images.length
        ? images.map((imgItem, index) => (
            <img
              src={imgItem.download_url}
              alt={imgItem.download_url}
              key={imgItem.id}
              className={
                currentSlide == index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            ></img>
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                className={
                  currentSlide == index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                key={index}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;

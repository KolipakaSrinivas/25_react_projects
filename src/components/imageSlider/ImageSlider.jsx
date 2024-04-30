import { useEffect } from "react";
import { useState } from "react";
import {
  BsArrowRightCircleFill,
  BsArrowLeftCircleFill,
  BsChatLeftDotsFill
} from "react-icons/bs";
import "./style.css";

function ImageSlider({ url, limit = 5, page = 1 }) {
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
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchData(url);
    }
  }, [url]);

  const handlePrev = () => {};
  const handleNext = () => {};
  if (loading) {
    return <div>Data Loading...</div>;
  }

  if (errorMsg) {
    return <div>Error {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow left-arrow"
        onClick={handlePrev}
      />
      {images && images.length
        ? images.map((imgItem) => (
            <img
              className="current-img"
              src={imgItem.download_url}
              alt={imgItem.download_url}
              key={imgItem.id}
            ></img>
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow right-arrow"
        onClick={handleNext}
      />
      <span className="circle circle-indcater">
        {images && images.length
          ? images.map((_, index) => (
              <button key={index} className="current-incater"></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;

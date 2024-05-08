import { useEffect, useState } from "react";
import "./styles.css";

const ScrollIndicator = ({ url = "" }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchData(getURL) {
    try {
      setLoading(true);
      const response = await fetch(getURL);
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  }

  function handleScroolPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroolPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  useEffect(() => {
    fetchData(url);
  }, [url]);
  if (loading) {
    <div>Loading...</div>;
  }
  if (errorMessage !== "") {
    return <div>{errorMessage}</div>;
  }

  return (
    <div className="container">
      <h1>Custom Scrool Indicator</h1>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;

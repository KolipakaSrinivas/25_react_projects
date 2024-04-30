import { useEffect, useState } from "react";
import "./style.css";

function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [errorMSG, setErrorMSG] = useState(null);
  const [disbleButton, setDisbleButton] = useState(false);
  console.log(count);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count == 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
        console.log(products[0]);
      }
    } catch (error) {
      setErrorMSG("error", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length == 100) setDisbleButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMSG !== null) {
    return <div>Error{errorMSG}</div>;
  }

  return (
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map((productsItem) => (
              <div key={productsItem.id} className="product">
                {<img src={productsItem.thumbnail} alt={productsItem.title} />}
                <h1>{productsItem.title}</h1>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disbleButton} onClick={() => setCount(count + 1)}>
          {disbleButton ? "No More Data" : "Load More Data"}
        </button>
      </div>
    </div>
  );
}

export default LoadMoreData;

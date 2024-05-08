// import Accordian from "./components/accordian/Accordian";
// import RandomColor from "./components/randomColor/RandomColor";
// import StarRating from "./components/starRating/StarRating";
import ImageSlider from "./components/imageSlider/ImageSlider";
// import LoadMoreData from "./components/loadMoreData/LoadMoreData";
// import TreeView from "./components/TreeView/TreeView";
// import QrCodeGenerater from "./components/qr-code-generater/QrCodeGenerater";
// import LightAndDarkMode from "./components/light-dark-mode/LightAndDarkMode";
// import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import "./App.css";
function App() {
  return (
    <div className="App">
      {/* Accordian */}
      {/* <Accordian /> */}
      {/* ColorGenerater */}
      {/* <RandomColor /> */}
      {/* Star Rating */}
      {/* <StarRating noOfStars={8} /> */}
      {/* image slider */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      />
      {/* Load More Data */}
      {/* <LoadMoreData /> */}
      {/* <TreeView /> */}
      {/* <QrCodeGenerater /> */}
      {/* <LightAndDarkMode /> */}
      {/* <ScrollIndicator url={`https://dummyjson.com/products?limit=100`} /> */}
    </div>
  );
}

export default App;

import { useState } from "react";
import "./style.css";

function RandomColor() {
  const [typeOfColor, setTypeColor] = useState("HEX");
  const [color, SetColor] = useState("#000000");

  const randomNumber = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleRandomColor = () => {
    const hexColor = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += hexColor[randomNumber(hexColor.length)];
    }
    console.log(hex);
    SetColor(hex);
  };

  const handleRandomRgbColor = () => {
    const r = randomNumber(256);
    const g = randomNumber(256);
    const b = randomNumber(256);
    SetColor(`rgb(${r},${g},${b})`);
  };

  const buttonStyle = {
    margin: "1rem",
    padding: "0.3rem 0.3rem",
    borderRadius: "1.5rem",
    border: "none"
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color
      }}
    >
      <button onClick={() => setTypeColor("HEX")} style={buttonStyle}>
        Create HEX Color
      </button>
      <button style={buttonStyle} onClick={() => setTypeColor("RGB")}>
        Create RGB Color
      </button>
      <button
        style={buttonStyle}
        onClick={
          typeOfColor == "HEX"
            ? () => handleRandomColor()
            : () => handleRandomRgbColor()
        }
      >
        Generate Random Color
      </button>
      <h1 className="rgbhex">{typeOfColor == "HEX" ? "HEX" : "RGB"}</h1>
      <div
        className="color"
        style={{
          fontSize: "2rem",
          color: "white",
          display: "flex",
          justifyContent: "center"
        }}
      >
        {color}
      </div>
    </div>
  );
}

export default RandomColor;

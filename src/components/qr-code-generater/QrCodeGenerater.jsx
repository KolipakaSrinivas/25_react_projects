import { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";

function QrCodeGenerater() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleQrCodeGenerate = () => {
    setQrCode(input);
    console.log(qrCode);
    setInput("");
  };

  return (
    <div className="container">
      <h1>QR Code</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          id="qr-code"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Your Value"
          value={input}
        />
        <button onClick={handleQrCodeGenerate}>Generate</button>
        <div className="qr">
          <QRCode value={qrCode} size={200} />
        </div>
      </div>
    </div>
  );
}

export default QrCodeGenerater;

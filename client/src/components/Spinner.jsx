import "./spinner.css";
import { useState, useRef } from "react";

export default function Spinner() {
  const [value, setValue] = useState(Math.ceil(Math.random() * 3600));
  const wheelRef = useRef(null);

  const spin = () => {
    if (wheelRef.current) {
      wheelRef.current.style.transform = `rotate(${value}deg)`;
      setValue((prevValue) => prevValue + Math.ceil(Math.random() * 3600));
    }
  };
  return (
    <div className="container">
      <button className="spinBtn" onClick={spin}>Spin</button>
      <div className="wheel" ref={wheelRef}>
        <div className="number" style={{ "--i": "1", "--clr": "#db7093" }}>
          <span>1</span>
        </div>
        <div className="number" style={{ "--i": "2", "--clr": "#20b2aa" }}>
          <span>2</span>
        </div>
        <div className="number" style={{ "--i": "3", "--clr": "#d63e92" }}>
          <span>3</span>
        </div>
        <div className="number" style={{ "--i": "4", "--clr": "#daa520" }}>
          <span>4</span>
        </div>
        <div className="number" style={{ "--i": "5", "--clr": "#ff340f" }}>
          <span>5</span>
        </div>
        <div className="number" style={{ "--i": "6", "--clr": "#ff7f50" }}>
          <span>6</span>
        </div>
        <div className="number" style={{ "--i": "7", "--clr": "#3cb371" }}>
          <span>7</span>
        </div>
        <div className="number" style={{ "--i": "8", "--clr": "#4169e1" }}>
          <span>8</span>
        </div>
      </div>
    </div>
  );
}

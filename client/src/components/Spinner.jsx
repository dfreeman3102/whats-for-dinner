import { useState } from "react"
import './Spinner.css'

export default function Spinner() {
    const [rotation, setRotation] = useState(0);
    const spinWheel = () => {
        const newRotation = Math.floor(Math.random() * 360 * 8);
        setRotation(newRotation);
    }
    return (
        <div className="spinner-container">
            <div className="spinner-wheel" style={{transform: `rotate(${rotation}deg)`}}>
                <div className="section">1</div>
                <div className="section">2</div>
                <div className="section">3</div>
                <div className="section">4</div>
                <div className="section">5</div>
                <div className="section">6</div>
            </div>
            <button onClick={spinWheel}>Spin the Wheel</button>
        </div>
    )
}
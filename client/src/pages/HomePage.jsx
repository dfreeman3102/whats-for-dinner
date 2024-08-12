import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
export default function HomePage() {
    return (
        <div>
        <p>
            Let us help you decide what to eat tonight.
        </p>
        <p>
            Click a button below to get started.
        </p>
        <button>
            <Link to="/cook">Cook at Home</Link>
        </button>
        <button>
            <Link to="/restaurant">Find a Restaurant</Link>
        </button>
        </div>
    )
    }
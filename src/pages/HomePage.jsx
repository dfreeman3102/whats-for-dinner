import { Link } from 'react-router-dom';
export default function HomePage() {
    return (
        <div>
        <h1>Whats For Dinner?</h1>
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
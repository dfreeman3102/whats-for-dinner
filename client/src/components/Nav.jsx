import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/settings">Settings</Link>
      </button>
      <button>
        <Link to="/login">Login</Link>
      </button>
    </nav>
  );
}

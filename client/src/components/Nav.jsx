import { Link } from "react-router-dom";
import Auth from "../utils/auth.js";
export default function Nav() {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  }

  return (
    <nav>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/settings">Settings</Link>
      </button>
      {Auth.loggedIn() ? (
      <button onClick={logout}>Logout</button>
      ) : (
      <>
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/signup">Signup</Link>
        </button>
      </>
      )  
      }
    </nav>
  );
}

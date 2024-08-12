import { Link } from "react-router-dom";
import Auth from "../utils/auth";
export default function Nav( { loggedIn } ) {

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
      {loggedIn ? (
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

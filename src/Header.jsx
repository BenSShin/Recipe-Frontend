import { Link } from "react-router-dom";
import { LogoutLink } from "./Authentication/Logout";

export function Header() {
  return (
    <header>
      <nav>
        {localStorage.jwt !== undefined ? (
          <>
            <div>
              <Link to="">Home</Link>|<Link to="/recipes">Recipes</Link>|
              <LogoutLink />
            </div>
          </>
        ) : (
          <>
            <div>
              <Link to="">Home</Link> | <Link to="/recipes">Recipes</Link> | <Link to="/login">Login</Link> |{" "}
              <Link to="/signup">Sign Up</Link>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}

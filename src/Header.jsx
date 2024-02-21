import { Link } from "react-router-dom";
import { LogoutLink } from "./Authentication/Logout";

export function Header() {
  return (
    <header>
      <nav>
        {localStorage.jwt !== undefined ? (
          <>
            <div>
              <Link to="/">Home</Link>|<Link to="/recipes">Recipes</Link>|
              <div>
                <LogoutLink />
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
}

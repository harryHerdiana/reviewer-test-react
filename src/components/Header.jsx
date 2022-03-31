import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

const Header = ({ onSignout }) => {
  const user = useContext(UserContext);

  return (
    <header className="header">
      {/* Well Done: You put the h1 tag on the main headline of the page, and keep the h1 only one. */}
      <h1 className="header__logo">Todo List</h1>
      <p className="header__user">{user?.email}</p>
      <p onClick={onSignout} className="header__signout">
        Log out
      </p>
    </header>
  );
};

export default Header;

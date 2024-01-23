import { HeartIcon } from "@heroicons/react/24/outline";
import { Children } from "react";
function Navbar({ children }) {
  return (
    <div className="navbar">
      <div className="navbar__logo">LOGO 👽</div>
      <input type="text" className="text-field" placeholder="search..." />
      {children}
      <button className="heart">
        <HeartIcon className="icon" />
        <span className="badge">4</span>
      </button>
    </div>
  );
}

export default Navbar;

export function SearchResult({ numOfResult }) {
  return <div className="navbar__result">Found {numOfResult} characters</div>;
}

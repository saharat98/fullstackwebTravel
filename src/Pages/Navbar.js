import "./Style/Navbar.css";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div className="textStyle">
          <NavLink className="textStyle" to="/">
            Thai Thiao Thai
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;

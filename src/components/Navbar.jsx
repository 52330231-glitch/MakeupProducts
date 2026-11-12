import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar({ theme, setTheme }) {

  return (
    <nav className={`navbar navbar-expand-lg ${theme === "light" ? "navbar-light bg-light" : "navbar-dark bg-dark"}`}>

      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          Makeup Products
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

          </ul>

          <button
            className="btn btn-outline-secondary ms-lg-3"
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
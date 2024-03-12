import { useEffect } from "react";
import { Link } from "react-router-dom";

const Layout = ({ children, title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <Link to="/" className="navbar-brand">
          <a>Crypto</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link active">
                <a>Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/converter" className="nav-link">
                <a>Crypto to Crypto</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/fiat-converter" className="nav-link">
                <a>Crypto to Fiat</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;

import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
function Header() {
  const navigate = useNavigate();
  const [checkLog, setLog] = useState(true);
  useEffect(() => {
    // Lấy dữ liệu từ localStorage
    const storedUser = localStorage.getItem('ON_LOGIN');
    console.log(storedUser)
    if (storedUser != null) {
      setLog(false);
    }
    else {
      setLog(true)
    }
  }, []);
  const logOut = () => {
    localStorage.removeItem('ON_LOGIN');
    navigate('/login');
  }
  const logIn = () => {
    navigate('/login');
  }
  return (
    <header className="root">
      <nav className="navbar navbar-expand-lg navbar-light bg-light root-header">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">
                  Shop
                </Link>
              </li>
            </ul>
            <h1>BouTique</h1>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/cart" className="nav-link active">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
              {checkLog ? (
                    <button onClick={logIn} className="nav-link poi">Login</button>
                  ) : (
                    <button onClick={logOut} className="nav-link">Logout</button>
                  )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

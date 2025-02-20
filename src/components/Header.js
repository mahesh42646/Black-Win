import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaGlobe, FaPhone } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import Login from "./Login";
import { auth, onAuthStateChanged, logout } from "../firebase";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user ? user : null);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <div className="header">
      <div className="top-bar d-flex justify-content-between px-4 py-2">
        <div>
          <FaPhone className="me-2" />
          <span>Customer Support</span>
        </div>
        <div>
          <FaGlobe className="me-2" />
          <span>En ▼</span>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src="" alt="Rifa Logo" className="logo me-2" />
            <span className="brand-name">Rifa</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contest">CONTEST</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/winners">WINNERS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pages">PAGES</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <span className="cart-amount me-2">0.00</span>
            <div className="cart-icon position-relative me-3">
              <FaShoppingCart />
              <span className="cart-badge">08</span>
            </div>

            {/* User Icon or Profile Picture without dropdown arrow */}
            {user ? (
              <Dropdown>
                <Dropdown.Toggle as="div" className="p-0 border-0">
                  <img
                    src={user.photoURL || "https://via.placeholder.com/40"}
                    alt="Profile"
                    className="rounded-circle"
                    width="40"
                    height="40"
                    style={{ cursor: "pointer" }}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu align="end">
                  <Dropdown.Item onClick={() => navigate("/profile")}>Profile</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <FaUser 
                className="user-icon me-3" 
                onClick={() => setShowLogin(true)} 
                style={{ cursor: "pointer" }} 
              />
            )}

            <button className="btn buy-tickets">⚡ BUY TICKETS</button>
          </div>
        </div>
      </nav>

      <Login show={showLogin} handleClose={() => setShowLogin(false)} />
    </div>
  );
}

export default Header;

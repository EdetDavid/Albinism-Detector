import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./navbar.css";

// BEM -> Block Element Modifier

const Navbar = () => {
  const Menu = () => {
    return (
      <>
        <p>
          <NavLink to="/" className="nav-link text-white">
            Home
          </NavLink>
        </p>
        <p>
          <NavLink to="/about" className="nav-link text-white">
            About
          </NavLink>
        </p>

        <p>
          <NavLink to="/case-studies" className="nav-link text-white">
            Case Studies
          </NavLink>
        </p>

        <p>
          <NavLink to="/albinism-detector" className="nav-link text-white">
            AI
          </NavLink>
        </p>
        <p>
          <NavLink to="/optimize" className="nav-link text-white">
            AI-BOT
          </NavLink>
        </p>
      </>
    );
  };
  const [token, setToken, removeToken] = useCookies(["mytoken"]);

  const logoutBtn = () => {
    removeToken(["mytoken"]);
  };

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar text-white ">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <NavLink to="/" className="navbar-brand fs-4 fw-bold">
            <img alt="logo" src={logo} style={{ width: 50, height: 50 }} />
          </NavLink>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="gpt3__navbar-sign">
        {token["mytoken"] && token["mytoken"] !== "undefined" ? (
          <NavLink to="/login" className="nav-link">
            <button onClick={logoutBtn} id="nav-btn-login" type="button">
              Logout
            </button>
          </NavLink>
        ) : (
          <NavLink to="/login" className="nav-link">
            <button id="nav-btn-logout" type="button">
              Get Started
            </button>
          </NavLink>
        )}
      </div>

      {/* Mobile  Menu   */}

      <div className="gpt3__navbar-menu ">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center bg-dark z-50">
            <div className="gpt3__navbar-menu_container-links ">
              <Menu />
              <NavLink to="/login" className="nav-link">
                <button id="nav-btn-login" type="button">
                  {"  Get Started "}
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

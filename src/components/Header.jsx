import logo from "../assets/img/logo-vinted.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import Cookies from "js-cookie";
import Toggle from "rsuite/Toggle";
import "rsuite/dist/rsuite.min.css";
import LabeledTwoThumbs from "./Range-Bar";
import * as React from "react";

const STEP = 1;
const MIN = 0;
const MAX = 500;

const Header = ({
  search,
  setSearch,
  token,
  setToken,
  setPriceDesc,
  values,
  setValues,
}) => {
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  return (
    <header className="container">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Link>
      <div className="input-div">
        <div>
          <IoMdSearch className="search-icon" />
          <input
            className="search-input"
            type="text"
            placeholder="Recherche des articles"
            onChange={handleSearchChange}
            value={search}
          />
        </div>

        <div>
          <span>Trier par prix :</span>
          <Toggle
            color="orange"
            unCheckedChildren="⇡"
            checkedChildren="⇣"
            onClick={() => {
              setPriceDesc((prev) => !prev);
            }}
          />
          <div className="range">
            <span>Prix entre :</span>
            <LabeledTwoThumbs values={values} setValues={setValues} />
          </div>
        </div>
      </div>
      {!token ? (
        <div className="sign">
          <Link to="/signup">
            <button className="white-button">S'inscrire</button>
          </Link>
          <Link to="/login">
            <button className="white-button">Connexion</button>
          </Link>
        </div>
      ) : (
        <div className="sign">
          <button
            className="logout"
            onClick={() => {
              Cookies.remove("userToken");
              setToken(null);
            }}
          >
            Se déconnecter
          </button>
        </div>
      )}

      <button className="sell">Vendre tes articles</button>
    </header>
  );
};

export default Header;

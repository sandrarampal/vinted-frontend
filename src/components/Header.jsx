import logo from "../assets/img/logo-vinted.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import Cookies from "js-cookie";
import Toggle from "rsuite/Toggle";
import "rsuite/dist/rsuite.min.css";

const Header = ({ search, setSearch, token, setToken, setPriceDesc }) => {
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
          <p>Trier par prix :</p>
          <Toggle
            color="blue"
            onClick={() => {
              setPriceDesc((prev) => !prev);
            }}
          />
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

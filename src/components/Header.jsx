import logo from "../assets/img/logo-vinted.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import Cookies from "js-cookie";

const Header = ({
  search,
  setSearch,
  isConnected,
  setIsConnected,
  token,
  setToken,
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
        <IoMdSearch className="search-icon" />
        <input
          className="search-input"
          type="text"
          placeholder="Recherche des articles"
          onChange={handleSearchChange}
          value={search}
        />
      </div>
      {!token ? (
        <div className="sign">
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
          <Link to="/login">
            <button>Connexion</button>
          </Link>
        </div>
      ) : (
        <div className="sign">
          <button
            onClick={() => {
              Cookies.remove("userToken");
              setToken("");
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

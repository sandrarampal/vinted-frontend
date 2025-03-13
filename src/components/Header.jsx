import logo from "../assets/img/logo-vinted.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

const Header = ({ search, setSearch, isConnected, setIsConnected }) => {
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
      {!isConnected ? (
        <div className="sign">
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
          <button>Connexion</button>
        </div>
      ) : (
        <div className="sign">
          <Link to="/signup">
            <button>Se déconnecter</button>
          </Link>
        </div>
      )}

      <button className="sell">Vendre tes articles</button>
    </header>
  );
};

export default Header;

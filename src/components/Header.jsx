import logo from "../assets/img/logo-vinted.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

const Header = ({ search, setSearch }) => {
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
          type="text"
          placeholder="Recherche des articles"
          onChange={handleSearchChange}
          value={search}
        />
      </div>

      <div className="sign">
        <button>S'inscrire</button>
        <button>Connexion</button>
      </div>
      <button className="sell">Vendre tes articles</button>
    </header>
  );
};

export default Header;

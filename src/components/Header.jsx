import logo from "../assets/img/logo-vinted.png";
import "./Header.css";
import { Link } from "react-router-dom";

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

      <input
        type="text"
        placeholder="Recherche des articles"
        onChange={handleSearchChange}
        value={search}
      />

      <div>
        <button>S'inscrire</button>
        <button>Connexion</button>
      </div>
      <button>Vendre tes articles</button>
    </header>
  );
};

export default Header;

import logo from "../assets/img/logo-vinted.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Link>

      <input type="text" placeholder="Recherche des articles" />
      <div>
        <button>S'inscrire</button>
        <button>Connexion</button>
      </div>
      <button>Vendre tes articles</button>
    </header>
  );
};

export default Header;

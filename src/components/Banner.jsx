import { Link } from "react-router-dom";
import banner from "../assets/img/banner.jpg";
import "./Banner.css";
import tear from "../assets/img/tear.svg";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="" />
      <img src={tear} alt="" className="tear" />

      <div className="banner-panel container">
        <h2>Prêts à faire du tri dans vos placards?</h2>
        <button>Commencez à vendre</button>
      </div>
    </div>
  );
};

export default Banner;

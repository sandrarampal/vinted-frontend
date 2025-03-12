import { Link } from "react-router-dom";
import banner from "../assets/img/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="" />

      <div className="banner-panel container">
        <h2>Prêts à faire du tri dans vos placards?</h2>
        <button>Commencez à vendre</button>
      </div>
    </div>
  );
};

export default Banner;

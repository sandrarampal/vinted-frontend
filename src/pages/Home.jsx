import { Link } from "react-router-dom";
import banner from "../assets/img/banner.jpg";
import "./Home.css";
import Banner from "../components/Banner";
import Offers from "../components/Offers";

const Home = ({ data, token }) => {
  return (
    <div>
      <Banner token={token} />
      <Offers data={data} />
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
import banner from "../assets/img/banner.jpg";
import "./Home.css";
import Banner from "../components/Banner";
import Offers from "../components/Offers";

const Home = ({ data, setData }) => {
  return (
    <div>
      <Banner />
      <Offers data={data} setData={setData} />
    </div>
  );
};

export default Home;

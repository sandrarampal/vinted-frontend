import { Link } from "react-router-dom";
import banner from "../assets/img/banner.jpg";
import "./Home.css";
import Banner from "../components/Banner";
import Offers from "../components/Offers";

const Home = ({ data, search, priceDesc, values }) => {
  return (
    <div>
      <Banner />
      <Offers
        data={data}
        search={search}
        priceDesc={priceDesc}
        values={values}
      />
    </div>
  );
};

export default Home;

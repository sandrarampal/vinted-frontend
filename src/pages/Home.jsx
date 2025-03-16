import { Link } from "react-router-dom";
import banner from "../assets/img/banner.jpg";
import "./Home.css";
import Banner from "../components/Banner";
import Offers from "../components/Offers";

const Home = ({ data, setData, search, setSearch, priceDesc }) => {
  return (
    <div>
      <Banner />
      <Offers
        data={data}
        setData={setData}
        search={search}
        setSearch={setSearch}
        priceDesc={priceDesc}
      />
    </div>
  );
};

export default Home;

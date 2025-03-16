import { Link } from "react-router-dom";
import banner from "../assets/img/banner.jpg";
import "./Home.css";
import Banner from "../components/Banner";
import Offers from "../components/Offers";

const Home = ({ data, search, priceDesc, values, setHomePage }) => {
  setHomePage(true);
  return (
    <div>
      <Banner />
      <Offers
        data={data}
        search={search}
        priceDesc={priceDesc}
        values={values}
        setHomePage={setHomePage}
      />
    </div>
  );
};

export default Home;

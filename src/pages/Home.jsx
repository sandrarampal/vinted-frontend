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

import Owner from "./Owner";
import Products from "./Products";
import { Link } from "react-router-dom";

const Offers = ({ data, setData, search, setSearch }) => {
  //   console.log(data);
  return (
    <section className="container">
      <div className="all-offers">
        {data.offers.map((offer, index) => {
          //   console.log(offer.owner);
          return (
            <div className="one-offer" key={offer._id}>
              <Owner owner={offer.owner} />
              <Link to={`/offer/${offer._id}`}>
                <Products offer={offer} />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Offers;

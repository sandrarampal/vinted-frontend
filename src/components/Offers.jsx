import Owner from "./Owner";
import Products from "./Products";
import { Link } from "react-router-dom";

const Offers = ({ data, search, priceDesc, values, setHomePage }) => {
  //   console.log(data);
  const newData = [...data.offers];

  return (
    <section className="container">
      <div className="all-offers">
        {newData.map((offer, index) => {
          return (
            <div className="one-offer" key={offer._id}>
              <Owner owner={offer.owner} />
              <Link
                to={`/offer/${offer._id}`}
                style={{ textDecoration: "none" }}
                onClick={() => {
                  setHomePage(false);
                }}
              >
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

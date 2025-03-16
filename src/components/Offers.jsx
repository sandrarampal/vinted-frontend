import Owner from "./Owner";
import Products from "./Products";
import { Link } from "react-router-dom";

const Offers = ({ data, setData, search, setSearch, priceDesc }) => {
  //   console.log(data);
  const newData = [...data.offers];
  if (priceDesc === false) {
    newData.sort((a, b) => a.product_price - b.product_price);
  } else {
    newData.sort((a, b) => b.product_price - a.product_price);
  }

  return (
    <section className="container">
      <div className="all-offers">
        {newData.map((offer, index) => {
          //   console.log(offer.owner);
          if (
            offer.product_name.toLowerCase().includes(search.toLowerCase()) ||
            offer.product_details[0].MARQUE.toLowerCase().includes(
              search.toLowerCase()
            )
          ) {
            return (
              <div className="one-offer" key={offer._id}>
                <Owner owner={offer.owner} />
                <Link
                  to={`/offer/${offer._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Products offer={offer} />
                </Link>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Offers;

import Owner from "./Owner";
import Products from "./Products";
import { Link } from "react-router-dom";

const Offers = ({ data, search, priceDesc, values, setHomePage }) => {
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
          if (
            offer.product_name.toLowerCase().includes(search.toLowerCase()) ||
            offer.product_details[0].MARQUE.toLowerCase().includes(
              search.toLowerCase()
            )
          ) {
            if (
              offer.product_price <= values[1] &&
              offer.product_price >= values[0]
            ) {
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
            }
          }
        })}
      </div>
    </section>
  );
};

export default Offers;

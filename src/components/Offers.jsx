import Owner from "./Owner";
import Products from "./Products";

const Offers = ({ data, setData }) => {
  //   console.log(data);
  return (
    <section className="container">
      <div className="all-offers">
        {data.offers.map((offer, index) => {
          //   console.log(offer.owner);
          return (
            <div className="one-offer" key={offer._id}>
              <Owner owner={offer.owner} />
              <Products offer={offer} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Offers;

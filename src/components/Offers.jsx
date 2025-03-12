import Owner from "./Owner";

const Offers = ({ data, setData }) => {
  //   console.log(data);
  return (
    <section className="container">
      <div className="all-offers">
        {/* {data.offers.map((offer, index)=>())} */}
        <div className="one-offer">
          <Owner />
        </div>
      </div>
    </section>
  );
};

export default Offers;

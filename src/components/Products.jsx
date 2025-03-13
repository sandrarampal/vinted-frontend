import "../pages/Home.css";

const Products = ({ offer }) => {
  //   console.log(offer);

  return (
    <div>
      <div className="product-pic">
        <img src={offer.product_pictures[0].secure_url} alt="" />
      </div>
      <div className="product-infos">
        <p>{offer.product_price}</p>
        {offer.product_details.map((element, index) => {
          if (element.TAILLE) {
            return <p key={index}>{element.TAILLE}</p>;
          }
          if (element.MARQUE) {
            return <p key={index}>{element.MARQUE}</p>;
          }
        })}
      </div>
    </div>
  );
};

export default Products;

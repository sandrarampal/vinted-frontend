import "../pages/Home.css";

const Products = ({ offer }) => {
  //   console.log(offer);

  return (
    <div>
      <div className="product-pic">
        <img src={offer.product_image.secure_url} alt="photo du vêtement" />
      </div>
      <div className="product-infos">
        <span>{offer.product_price.toFixed(2)} €</span>
        {offer.product_details.map((element, index) => {
          if (element.TAILLE) {
            return (
              <span key={index} className="product-detail">
                {element.TAILLE}
              </span>
            );
          }
          if (element.MARQUE) {
            return (
              <span key={index} className="product-detail">
                {element.MARQUE}
              </span>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Products;

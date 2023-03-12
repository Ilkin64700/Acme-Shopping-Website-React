import { Link } from "react-router-dom";
import ButtonHero from "../../../components/userinterface/ButtonHero";
import { productdata } from "../componentsdata/HomeData";

const Product = ({ allproductsdiv, allproductscolor }) => {
  return (
    <section className="product">
      <div className="container">
        <div className="product-lefttext">
          <h6 className="product-shop">shop products</h6>
          <h2 className="product-openhours">Open 24/7/365.</h2>
        </div>
        <div className="product-list">
          {productdata.map((item, index) => (
            <div className="product-item">
              <Link to="/productitem" state={item}>
                <div className={item.productclasses.join(" ")}></div>
                {item.haveSale ? <div className="salelabel">Sale</div> : null}
                <div className="product-data">
                  <h6 className="product-dataheading">{item.title}</h6>
                  <div className="allprices">
                    <p className="product-datatext">$ {item.price}.00 USD</p>
                    <p className="underline">{item.discountPrice}</p>
                  </div>
                </div>
              </Link>
              <div className="productbutton">
                <Link
                  className="productbuttoncolor"
                  to="/productitem"
                  state={item}
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <ButtonHero
          text={"View All Products"}
          buttondiv={allproductsdiv}
          buttoncolor={allproductscolor}
          to="/shoppage"
        />
      </div>
    </section>
  );
};

export default Product;

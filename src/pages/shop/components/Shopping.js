import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonHero from "../../../components/userinterface/ButtonHero";
import { categoryProperties, shoppingdata } from "../../shop/componentsdata/ShopData";

const Shopping = () => {
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [data, setData] = useState();

  useEffect(() => {
    const filteredData = shoppingdata.filter(
      (item) => item.category !== "Tents"
    );
    setData(filteredData);
  }, []);

  const filterData = (filtercategory) => {
    const filteredResult = shoppingdata.filter(
      (item) => item.category === filtercategory
    );
    setData(filteredResult);
  };

  // console.log("selectitemd", selectedItem);
  

  return (
    <section className="shopping">
      <div className="container">
        <div className="shopping-content">
          <div className="shopping-category">
            <h2 className="category-heading">Shop by Category</h2>
            <div className="category-list">
              {categoryProperties.map((buttonProp, index) => (
                <ButtonHero
                  buttondiv="category-margin"
                  buttoncolor={
                    selectedCategory === index ? "bgcolor" : "category-color"
                  }
                  text={buttonProp.text}
                  onClick={() => {
                    setSelectedCategory(index);
                    filterData(`${buttonProp.filter}`);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="product-list">
            {data?.map((item, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default Shopping;

import React, { useContext, useId, useState } from "react";
import BlackBanner from "../../common/BlackBanner";
import { AiOutlineTwitter } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import CommerceCart from "../../layout/CommerceCart";
import { BasketContext } from "../../context/BasketContext";

const ProductItem = () => {
  const quantityInputId = useId();
  const [value, setValue] = useState(1);
  const [openCart, setOpenCart] = useState(false);
  const {commerceCartItems,setcommerceCartItems}= useContext(BasketContext)
  const location = useLocation();
  const data = location?.state;
   

  const handleAddToCart = (product) => {
    
    setcommerceCartItems(prev => {

      if(prev){
        
      const isItemInCart = prev?.find(item => item.id === product.id)
      console.log("prev",prev)
      if (isItemInCart) {
        return prev.map(item => (
          item.id === product.id ? { ...item, quantity: item.quantity + 1 }
            : item
        ))
      }
    }
      // first time the items is added
      return [...prev, { ...product, quantity: 1 }]

    })
  };

 
    const handleRemoveFromCart = (id) =>{
      setcommerceCartItems(prev => (
        prev.reduce((acc, item) => {
          if (item.id === id) {
            if (item.quantity === 1) return acc;
            return [...acc, { ...item, quantity: item.quantity - 1 }];
          }
          else {
            return [...acc, item];
          }
  
        }, []  
  
        )
      ))
    }

  return (
    <>
      <BlackBanner text={data.bannertext} />
      <section className="productitemcontent">
        <div className="container">
          <div className="productitem-allcontent">
            <div
              style={{ backgroundImage: `url(${data.backgroundimagepath})` }}
              className="productitem-leftcontent"
            ></div>
            {data.haveSale ? <div className="salelabel">Sale</div> : null}
            <div className="productitem-rightcontent">
              <h2 className="productitem-title">{data.title}</h2>
              <div className="allprices">
                <p className="productitem-price">$ {data.price}.00 USD</p>
                <p className="underline">{data.discountPrice} </p>
              </div>
              <div className="addtocart-form">
                <form>
                  <label htmlFor="#">Quantity</label>
                  <input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    name="quantity"
                    id={quantityInputId}
                    type="number"
                    min="1"
                  />
                  <input onClick={()=>{handleAddToCart(data);setOpenCart(!openCart)}} name="addtocart" type='button' value={"Add to Cart"} />
                  
                </form>
              </div>
              {data.showText ? (
                <div className="richtext">
                  <h2 className="textelement-title">
                    What’s a Rich Text element?
                  </h2>
                  <p>
                    The rich text element allows you to create and format
                    headings, paragraphs, blockquotes, images, and video all in
                    one place instead of having to add and format them
                    individually. Just double-click and easily create content.
                  </p>
                  <h4>Static and dynamic content editing</h4>
                  <p>
                    A rich text element can be used with static or dynamic
                    content. For static content, just drop it into any page and
                    begin editing. For dynamic content, add a rich text field to
                    any collection and then connect a rich text element to that
                    field in the settings panel. Voila!
                  </p>
                  <h4>How to customize formatting for each rich text</h4>
                  <p>
                    Headings, paragraphs, blockquotes, figures, images, and
                    figure captions can all be styled after a class is added to
                    the rich text element using the "When inside of" nested
                    selector system.
                  </p>
                  <p></p>
                </div>
              ) : null}
              <div>
                <h3 className="tweet-title">
                  Tweet about #AcmeOutdoors products
                </h3>
                <div className="tweet-widget">
                  <a href="https://twitter.com/">
                    <AiOutlineTwitter className="tweet-icon" />
                    Tweet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {openCart ? <CommerceCart data={data} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} commerceCartItems={commerceCartItems} closeCart={setOpenCart} /> : null}
    </>
  );
};

export default ProductItem;

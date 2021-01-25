import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = (props) => {
  const { id, title, image, price, rating } = props;
  const [state, dispatch] = useStateValue();
  // console.log("basket:", state);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#127775;</p>
            ))}
        </div>
      </div>
      <img src={image} alt="learn startup" />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
};

export default Product;

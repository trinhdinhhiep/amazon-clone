import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import {useHistory} from 'react-router-dom'

const Subtotal = () => {
  const history=useHistory()
  const [{ basket }, dispatch] = useStateValue();
  const sumPrice = () => {
    const priceArr = [];
    basket.forEach((item) => {
      priceArr.push(item.price);
    });
    const sum = priceArr.reduce((x, y) => x + y, 0);
    return sum;
  };
  const handleProceedToCheckout=()=>{
    history.push('/payment')
  }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} item):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={sumPrice()}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;

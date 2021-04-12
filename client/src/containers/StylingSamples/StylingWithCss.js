import React from "react";

import "./StylingWithCss.css";

function StylingWithCss(props) {
  return (
    <form id="styling-with-css">
      <div className="section-container">
        <div className="section">
          <h3>Billing Address</h3>
          <div className="input-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" name="fullname" placeholder="Maisa Mallikas" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="maisa.mallikas@example.com"
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" placeholder="Länsikatu 15" />
          </div>
          <div className="section-container">
            <div className="input-group section">
              <label htmlFor="city">City</label>
              <input type="text" name="city" placeholder="Joensuu" />
            </div>
            <div className="input-group section">
              <label htmlFor="zip">Zip</label>
              <input type="text" name="zip" placeholder="80110" />
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Payment</h3>
          <div className="input-group">
            <label htmlFor="cardType">Select Card</label>
            <select name="cardType">
              <option value="visa">Visa</option>
              <option value="masterCard">Mastercard</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="cardName">Name on Card</label>
            <input type="text" name="cardName" placeholder="Maisa Mallikas" />
          </div>
          <div className="input-group">
            <label htmlFor="cardNumber">Credit card number</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="1111-2222-3333-4444"
            />
          </div>
          <div className="section-container">
            <div className="input-group section">
              <label htmlFor="cardExpMonth">Exp Month</label>
              <input type="number" name="cardExpMonth" placeholder="06" />
            </div>
            <div className="input-group section">
              <label htmlFor="cardExpYear">Exp Year</label>
              <input type="number" name="cardExpYear" placeholder="2020" />
            </div>
            <div className="input-group section">
              <label htmlFor="cardCvv">CVV</label>
              <input type="text" name="cardCvv" placeholder="123" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default StylingWithCss;

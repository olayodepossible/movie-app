import React from "react";
import "../styles/Payment.css"
const Payment = () => {
  return (
    
    <div className="payment__body">
      <div className="payment__logo">
        <span>
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt="logo"
          />
          Pay
        </span>
        <p>
          <span>Or pay with card</span>
        </p>
      </div>

      <div className="payment__form">
        <form action="//httpbin.org/post" method="POST">
          <input type="hidden" name="token" />
          <div class="group">
            <label>
              <span>Card</span>
              <div id="card-element" class="field"></div>
            </label>
          </div>
          <div class="group">
            <label>
              <span>First name</span>
              <input id="first-name" name="first-name" class="field" placeholder="Manoj" />
            </label>
            <label>
              <span>Last name</span>
              <input id="last-name" name="last-name" class="field" placeholder="Halugona" />
            </label>
          </div>
          <div class="group">
            <label>
              <span>Address</span>
              <input id="address-line1" name="address_line1" class="field" placeholder="77 Winchester Lane" />
            </label>
            <label>
              <span>Address (cont.)</span>
              <input id="address-line2" name="address_line2" class="field" placeholder="" />
            </label>
            <label>
              <span>City</span>
              <input id="address-city" name="address_city" class="field" placeholder="Coachella" />
            </label>
            <label>
              <span>State</span>
              <input id="address-state" name="address_state" class="field" placeholder="SA" />
            </label>
            <label>
              <span>ZIP</span>
              <input id="address-zip" name="address_zip" class="field" placeholder="92236" />
            </label>
            <label>
              <span>Country</span>
              <select name="address_country" id="address-country" class="field">
                <option value="IN">India</option>
                <option value="SG" selected>Singapore</option>
              </select>
            </label>
          </div>
          <button type="submit">Pay $25</button>
          <div class="outcome">
            <div class="error"></div>
            <div class="success">
              Success! Your Stripe token is <span class="token"></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;

import React, { useState } from 'react';
import './checkout.css'
const Checkout = () => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    pincode:'',
    // ... other shipping fields
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    // ... other payment fields
  });

  const handleShippingInfoChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    // Logic to handle placing the order, possibly sending data to a server
    // You can validate the data here before proceeding with the order placement
    setTimeout(() => {
        // Assuming the order is successfully placed
       // setIsPlacingOrder(false);
      window.alert('Order placed successfully!');
      }, 2000);

  };

  return (
    <div className='parent'>
        <div className='billing'>
      <h1>Checkout</h1>
      <div className='shipping'>
        <h2>Shipping Information</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={shippingInfo.name}
          onChange={handleShippingInfoChange}
        />
         <input
          type="text"
          name="address"
          placeholder="Address"
          value={shippingInfo.address}
          onChange={handleShippingInfoChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={shippingInfo.city}
          onChange={handleShippingInfoChange}
        />
        <input
          type="number"
          name="pincode"
          placeholder="Pincode"
          value={shippingInfo.pincode}
          onChange={handleShippingInfoChange}
        />
        {/* Other shipping input fields */}
      </div>
      <div>
        <h2>Payment Information</h2>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentInfo.cardNumber}
          onChange={handlePaymentInfoChange}
        />
        <input
          type="text"
          name="cardholdername"
          placeholder="Cardholder Name"
          value={paymentInfo.cardholdername}
          onChange={handlePaymentInfoChange}
        />
        <input
          type="date"
          name="expirationdate"
          placeholder="Expiration Date"
          value={paymentInfo.expirationdate}
          onChange={handlePaymentInfoChange}
        />
        <input
          type="text"
          name="securitycode"
          placeholder="Security Code (CVV/CVC)"
          value={paymentInfo.securitycode}
          onChange={handlePaymentInfoChange}
        />
        {/* Other payment input fields */}
      </div>
      {/* Display order summary */}
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>

    </div>
  );
};

export default Checkout;

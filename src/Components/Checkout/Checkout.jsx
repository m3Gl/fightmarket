import './Checkout.css'
import React from 'react'
import { useSelector } from 'react-redux';

/*
  total = total + item.price;
        if (state.length >= 2){
            discount = total / 4
        } else {
            discount = total / 10
        }
        finalPrice = total - discount
*/

const Checkout = () => {

  const state = useSelector((state) => state.HandleCart);

  let total = 0
  let discount = 0
  let finalPrice = 0
  const itemList = (item) => {

      total = total + item.price;
      if (state.length >= 2){
        discount = total / 4
    } else {
        discount = total / 10
    }
    finalPrice = total - discount

      return (
          <div className="totalContent">
              <p>{item.title}</p>
              <span>{item.price}</span>
          </div>
      );
  }

return (
  <>
      <div className='checkoutItems container'>
          <div className="row">
              <div className="col">
                  <div className="formGroup">
                      <label htmlFor="name">Name</label>
                      <input type="text" id='name' />
                  </div>
                  <div className="formGroup">
                      <label htmlFor="address">Address</label>
                      <input type="text" id='address' />
                  </div>
                  <div className="formGroup">
                      <label htmlFor="phone">Phone</label>
                      <input type="text" id='phone' />
                  </div>
                  <div className="formGroup">
                      <a href="/home" className='checkout'>Checkout</a>
                  </div>
              </div>
              <div className="col">
                  <div className="totalCart">
                      <h2>Your Cart <span>{state.length}</span></h2>
                      <div className="totalInfo">
                          {state.map(itemList)}
                      </div>
                      <div className="total">
                          <p>Total:</p>
                          <span>${Math.floor(finalPrice)} with discount {Math.floor(discount)} </span>
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </>
)
}

export default Checkout

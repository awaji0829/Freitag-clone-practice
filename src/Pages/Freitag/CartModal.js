import React, { Component } from "react";

class CartModal extends Component {
  render() {
    const { cartOpen, cartoneData } = this.props;
    return (
      <>
        {cartOpen && (
          <div className="cartmodal">
            {cartoneData.map((cart) => {
              return (
                <div className="cart-content">
                  <ul>
                    <li className="price">{cart.fury[0].price}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}

export default CartModal;

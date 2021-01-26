import React, { Component } from "react";
import { ValidatedForm } from "../form/ValidatedForm";

export class Checkout extends Component {
  constructor(props) {
    super(props);
    this.defaultAttributes = { type: "text", required: true };
    this.formModel = [
      { label: "Name" },
      { label: "Email", attribute: { type: "email" } },
      { label: "Address" },
      { label: "City" },
      { label: "Zip/Postal Code", name: "zip" },
      { label: "Country" },
    ];
  }

  handleSubmit = (formData) => {
    const order = {
      ...formData,
      product: this.props.cart.map((item) => ({
        quantity: item.quantity,
        product_id: item.product.id,
      })),
    };
    this.props.placeOrder(order);
    this.props.clearCart();
    this.props.history.push("/shop/thanks");
  };

  handleCancel = () => {
    this.props.history.push("/shop/cart");
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col bg-dark text-white">
            <div className="navbar-brand">SPORTS STORE</div>
          </div>
        </div>
        <div className="row">
          <div className="col m-2">
            <ValidatedForm
              formModel={this.formModel}
              defaultAttributes={this.defaultAttributes}
              submitCallback={this.handleSubmit}
              cancelCallback={this.handleCancel}
              submitText="Place Order"
              cancelText="Return to Cart"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;

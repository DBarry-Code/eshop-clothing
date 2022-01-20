import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe-button/stripe.button";

import {
    selectCartItems,
    selectCartTotal,
} from "../../redux/cart/card.selectors";

import "./checkout.scss";

function formatDate() {
    const now = new Date();
    let month = now.getMonth() + 1;
    let year = now.getFullYear().toString().substring(2);
    month.toString();

    return (month < 10 ? "0" : "") + month + "/" + year;
}

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-blocks'>
                <span>Product</span>
            </div>
            <div className='header-blocks'>
                <span>Description</span>
            </div>
            <div className='header-blocks'>
                <span>Quantity</span>
            </div>
            <div className='header-blocks'>
                <span>Price</span>
            </div>
            <div className='header-blocks'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}

        <div className='total'>
            <span>TOTAL:€{total}</span>
        </div>

        <div className='test-warning'>
            * Please use the following test credit card for payment *
            <br />
            4242 4242 4242 4242 - Exp {formatDate()} - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablehKey =
        "pk_test_51KJx7KDg1akyXq8TPCyKIZgTtkOfbe1qaE0SVEuyuOglmmEZnomHlh9XZF4xbDOqu75pqeBzu0pq36yKdBFnDjBm00LGE1Z5tH";

    const onToken = (token) => {
        console.log(token);
        alert("Payment Successful");
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Barry`s e-shop-clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is € ${price}`}
            currency='EUR'
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablehKey}
        />
    );
};

export default StripeCheckoutButton;

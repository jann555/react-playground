import { useContext } from 'react';
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CheckoutContainer, CheckOutHeader, HeaderBlock, TotalItems } from './checkout.styles.jsx';

const Checkout = () =>{
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <CheckoutContainer>
            <CheckOutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckOutHeader>
            <div>
            {cartItems.map( (item) => (
                    <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>
                ))
            }
            </div>
            <TotalItems>Total: ${cartTotal}</TotalItems>
        </CheckoutContainer>
    )
}
export default Checkout;
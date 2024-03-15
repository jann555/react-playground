import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../context/cart.context';

import { CartDropdownContainer, CartItems } from './cart-dropdown.styles';


const CartDropdown = () =>{
    const { cartItems } = useContext(CartContext);
    const navigateToCart = useNavigate();
    // const isCheckoutDisabled = cartItems.length;

    const handleOnClick = () =>{
        console.log('Triggered Cart Page Navigation');
        navigateToCart('checkout');
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.map( (item) => (
                    <CartItem key={item.id} cartItem={item}></CartItem>
                ))}
            </CartItems>
            <Button type="button" buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleOnClick}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;
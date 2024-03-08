import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import './cart-dropdown.styles.scss';
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../context/cart.context';

const CartDropdown = () =>{
    const { cartItems } = useContext(CartContext);
    const navigateToCart = useNavigate();
    // const isCheckoutDisabled = cartItems.length;

    const handleOnClick = () =>{
        console.log('Triggered Cart Page Navigation');
        navigateToCart('checkout');
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map( (item) => (
                    <CartItem key={item.id} cartItem={item}></CartItem>
                ))}
            </div>
            <Button buttonType='inverted' onClick={handleOnClick}>GO TO CHECKOUT</Button>
        </div>
    );
}

export default CartDropdown;
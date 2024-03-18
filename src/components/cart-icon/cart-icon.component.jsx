import {  useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action.js';
import { CartIconContainer, ShoppingIconContainer, ItemCountContainer} from './cart-icon.styles.jsx';

const CartIcon = () =>{
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toogleIsCarOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    
    return(
        <CartIconContainer onClick={toogleIsCarOpen}>
            <ShoppingIconContainer className='shopping-icon' />
            <ItemCountContainer>{cartCount}</ItemCountContainer>
        </CartIconContainer>
    )
}

export default CartIcon;
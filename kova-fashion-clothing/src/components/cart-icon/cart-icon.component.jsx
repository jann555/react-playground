import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import { CartIconContainer, ShoppingIconContainer, ItemCountContainer} from './cart-icon.styles.jsx';

const CartIcon = () =>{
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toogleIsCarOpen = () => setIsCartOpen(!isCartOpen);
    
    return(
        <CartIconContainer onClick={toogleIsCarOpen}>
            <ShoppingIconContainer className='shopping-icon' />
            <ItemCountContainer>{cartCount}</ItemCountContainer>
        </CartIconContainer>
    )
}

export default CartIcon;
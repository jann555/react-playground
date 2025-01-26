/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles'

const CartDropdown = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const navigateToCart = useNavigate()
  // const isCheckoutDisabled = cartItems.length;

  const handleOnClick = () => {
    dispatch(setIsCartOpen(false))
    navigateToCart('checkout')
  }
  return (
        <CartDropdownContainer>
            <CartItems>
                { cartItems?.length
                  ? cartItems.map((item) =>
                    (<CartItem key={item.id} cartItem={item}></CartItem>))
                  : <EmptyMessage>Your Cart in Empty</EmptyMessage>
                }
            </CartItems>
            <Button type="button" buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleOnClick} >CHECKOUT</Button>
        </CartDropdownContainer>
  )
}

export default CartDropdown

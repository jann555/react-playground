/* eslint-disable react/react-in-jsx-scope */
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector.js'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { CheckoutContainer, CheckOutHeader, HeaderBlock, TotalItems } from './checkout.styles.jsx'
import PaymentForm from '../../components/payment-form/payment-form.component.jsx'

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
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
            </CheckOutHeader>
            <div>
            {cartItems.map((item) => (
                    <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>
            ))
            }
            </div>
            <TotalItems>Total: ${cartTotal}</TotalItems>
            <PaymentForm/>
        </CheckoutContainer>
  )
}
export default Checkout

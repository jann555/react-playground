/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { CartItemContainer, ItemDetailsContainer, ItemImg, ItemName } from './cart-item.styles.jsx'

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  return (
        <CartItemContainer>
            <ItemImg src={imageUrl} alt={`${name}`}/>
            <ItemDetailsContainer>
                <ItemName className='name'>{name}</ItemName>
                <span className='price'>{quantity} x {price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
  )
}

export default CartItem

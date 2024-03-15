import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import './product-card.styles.scss'

const ProductCard = ({ product }) =>{
    const { name, price, imageUrl } = product;
    const {addItemToCart} = useContext(CartContext);

    const AddProductToCart = () => {
        addItemToCart(product);
    }

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button  type="button" buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={AddProductToCart} >Add to cart</Button>
        </div>
    );
}

export default ProductCard;
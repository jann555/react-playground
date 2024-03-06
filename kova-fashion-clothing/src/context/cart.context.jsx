import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=> {},
    cartItems: [],
    addItemToCart: () => {}
})

const addCartItem = (cartItems, productToAdd) => {
    // This could have been simplified using filter()
    const isProductInCart = cartItems.find( (cartItem) => cartItem.id === productToAdd.id )

    if (isProductInCart){
        return cartItems.map( (cartItem) => cartItem.id === productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity +1 }
        : cartItem
        )
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
}

export const CartProvider = ({children}) =>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems};

    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
}
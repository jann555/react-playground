import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES} from "./cart.types";

// Helper functions

const addCartItem = (cartItems, productToAdd) => {
    const isProductInCart = cartItems?.find( (cartItem) => cartItem.id === productToAdd.id )

    if (isProductInCart){
        return cartItems.map( (cartItem) => cartItem.id === productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity +1 }
        : cartItem
        )
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existsInCart = cartItems?.find( (cartItem) => cartItem.id === cartItemToRemove.id)

    if (existsInCart.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map( (cartItem) => cartItem.id === cartItemToRemove.id ?
    {...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
    )
}

const clearCartItem =(cartItems, cartItemToClear ) => cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);


// Action Creators

export const setIsCartOpen = (bool) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

export const addItemToCart = (cartItems, productToAdd) => {
    const items = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, items);
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const items = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, items);
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const items = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, items);
}



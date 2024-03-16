import { createContext, useReducer } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: false,
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartTotal: 0,
    cartCount: 0,
});

const addCartItem = (cartItems, productToAdd) => {
    // This could have been simplified using filter()
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

export const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_COUNT: 'SET_CART_COUNT',
    SET_TOTAL: 'SET_TOTAL',
}


const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            }
        case CART_ACTION_TYPES.SET_CART_COUNT:
            return {
                ...state,
                cartCount: payload,
            }
        case CART_ACTION_TYPES.SET_TOTAL:
            return {
                ...state,
                cartTotal:payload,
            }
    
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);;
    }
}

export const INITIAL_CART_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
}

const clearCartItem =(cartItems, cartItemToClear ) => cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);

export const CartProvider = ({children}) =>{

    const [ {cartItems, cartCount, cartTotal, isCartOpen}, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);

    const updateCartItemsReducer = (newCartItems) =>{
        const newCartCount = newCartItems.reduce( (total, cartItem) => total + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce( (total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);

        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: {
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartTotal: newCartTotal,
            }
        });
    }

    const addItemToCart = (productToAdd) => {
        const items = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(items);
    }

    const removeItemFromCart = (cartItemToRemove) => {
        const items = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(items);
    }

    const clearItemFromCart = (cartItemToClear) => {
        const items =clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(items);
    }

    const setIsCartOpen = (bool) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
            payload: bool,
        })
    }

    const value = {
        isCartOpen, 
        cartItems, 
        cartCount, 
        cartTotal,
        setIsCartOpen, 
        addItemToCart, 
        removeItemFromCart,
        clearItemFromCart, 
    };

    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
}
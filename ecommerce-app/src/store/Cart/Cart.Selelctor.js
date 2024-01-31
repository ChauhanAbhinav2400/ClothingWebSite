import {createSelector} from "reselect"

const cartSelectorReducer = (state)=>state.cart;


export const CartdataSelector = createSelector(
    [cartSelectorReducer],
    (cart)=>cart.cartData 
    )



export const CartisCartOpen = createSelector(
    [cartSelectorReducer],
    (cart)=>cart.isCartOpen
    )

export const CartcartTotal = createSelector(
    [CartdataSelector],
    (cartData)=>cartData.reduce((initial,cartItem) => initial+cartItem.quantity*cartItem.price,0)
    
)
    
export const Cartcartcount =  createSelector(
    [CartdataSelector],
    (cartData)=>cartData.reduce((total,cartitem)=>
    total+cartitem.quantity
,0)

    )

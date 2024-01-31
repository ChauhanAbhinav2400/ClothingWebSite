

const addCartData = (cartData,product)=>{
    const existingitem = cartData.find((item) => 
        item.id === product.id
    )
    // console.log(Boolean(existingitem))
    if(existingitem){
       return cartData.map((item)=>
           item.id === product.id ?
             {...item,quantity:item.quantity+1}:item
           
           
        )
    }
    return [...cartData,{...product,quantity:1}]
    }
    
    const RemoveCartData = (cartData,productToRemove)=>{
        const existingitem = cartData.find((item) => 
        item.id === productToRemove.id
    )
    if(existingitem.quantity === 1 ){
        return cartData.filter((item)=>item.id !== productToRemove.id)
    }
    return cartData.map((item)=>
    item.id === productToRemove.id ?
      {...item,quantity:item.quantity-1}:item
    
    
    )
    }
    
    const ClearCartData = (cartData,productToClear)=>{
    const existingitem = cartData.find((item)=>
    item.id === productToClear.id
    )
    if(existingitem){
        return cartData.filter(item =>item.id !== productToClear.id )
    }
    }


export const addItemtoCart = (cartData,product)=>{
    const newCartData = addCartData(cartData,product)
      return{type:"SET_CART_VALUES",payload:newCartData}
   }
   
   export  const RemoveItemtoCart = (cartData,productToRemove)=>{
      const newCartData =   RemoveCartData(cartData,productToRemove)
      return{type:"SET_CART_VALUES",payload:newCartData}
   }
   export  const clearCartItem = (cartData,productToClear)=>{
       const newCartData =  ClearCartData(cartData,productToClear)
       return{type:"SET_CART_VALUES",payload:newCartData}
    }

   export  const setIsCartOpen = (bool)=>{
        return {type:"CART_OPEN_CLOSE",payload:bool}
         }






















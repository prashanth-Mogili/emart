//For Add Item to cart
export const addCart = (product) =>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

//For Delete Item from cart
export const delCart = (product) =>{
    return{
        type:"DELITEM",
        payload:product
    }
}



export type Action = {
    type:string,
    item:object
}

export const ADD_TO_BASKET = "ADD_TO_BASKET"

const addToBasket = ( Image: String,
    author: String,
    name: String,
    key: number,
    price: number,):Action=>({
    type:ADD_TO_BASKET,
    item:{
        id: key,
        title: name,
        image:Image,
        price: price,
        author: author,
    }
})

export default addToBasket
import { products } from "../data/products"

export const getProducts = () =>{

    return products;
}

export const CalcularTotal = (items) => {

   return items.reduce((accumulator, item) => accumulator + item.product.price * item.quantity, 0);

}
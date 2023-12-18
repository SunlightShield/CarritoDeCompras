import { useReducer, useState } from "react"
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"
import { itemsReducer } from "./reducer/itemsReducer"

const initialCartItems = JSON.parse(sessionStorage.getItem("cart") || []) //el carrito parte vacio

export const CartApp = () => {

    // const [cartItems, setCartItems] = useState(initialCartItems) ;
    const [cartItems, dispach] = useReducer(itemsReducer, initialCartItems) ;


    const handlerAddProductCart = (product) => {
        const hasItem = cartItems.find((i) => i.product.id === product.id)
        if(hasItem){

            // setCartItems([
            //     ...cartItems.filter((i) => i.product.id !== product.id),{
            //         product, 
            //         quantity: hasItem.quantity + 1,
            //     }
            // ])

            dispach(
                {
                    type: "UpdateQuantityProductCart",
                    payload: product,
                }
            );

        } else {

            dispach({
                type: "AddProductCart",
                payload: product, 
            });
            // setCartItems([...cartItems, {
            //     product,
            //     quantity: 1,
    
            // }
            // ])
        }
    }

    const handlerDeleteProductCard = (id) => {
        // setCartItems([
        //     ...cartItems.filter((i) => i.product.id !== id)
        // ])
        dispach({
            type: "DeleteProductCart",
            payload: id, 
        });

    }

    return (

        <>

            <div className="container">
                <h3>Carrito de compras</h3>

                <CatalogView handler={handlerAddProductCart} />

                {cartItems?.length <= 0 || ( <div className="my-4 w-50">
                    <CartView items={cartItems} handlerDelete={handlerDeleteProductCard} />
                </div>
                )}

            </div>
        </>

    )
}
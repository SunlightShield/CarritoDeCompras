import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../services/productServices";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({ handler}) => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        setProducts(getProducts());
    }, []
    )

    return (

        <>
            <div className="row">
                {products.map(prod => (
                    <div className="col-4 mb-2" key={prod.id}>
                        <div className="card">
                            <ProductCardView handler={handler} id={prod.id} name={prod.name} description={prod.description} price={prod.price} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}
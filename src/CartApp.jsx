import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "./services/productServices";

export const CartApp = () => {
    const [products, setProducts] = useState([])


    useEffect( () => {
        setProducts(getProducts());
    }, []
    )


    return (

        <>

            <div className="container">
                <h3>Carrito de compras</h3>
                <div className="row">
                    {products.map(prod => (
                        <div className="col-4 mb-2" key={prod.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{prod.name}</h5>
                                <p className="card-text"> {prod.description}</p>
                                <p className="card-text"> {prod.price}</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>

                <div className="my-4 w-50">
                    <h3>carro de compra</h3>
                    <table className="table table-hover">
                        <thead>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Eliminar</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>nombre</td>
                                <td>precio</td>
                                <td>cantidad</td>
                                <td>total</td>
                                <td>eliminar</td>
                            </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                                <td colSpan ="3" className="text-end fw-bold">total</td>
                                <td colSpan ="2" className="text-end fw-bold">1234</td>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </>

    )
}
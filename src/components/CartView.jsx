import { useEffect, useState } from "react"
import { CalcularTotal } from "../services/productServices"

export const CartView = ({ handlerDelete, items }) => {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(CalcularTotal(items));
            sessionStorage.setItem("cart",JSON.stringify(items)); //session storage solo guarda datos de tipo string, por lo cual usamos el 
            //Json.stringify para transformar items (objeto) en String

    }, [items]);

    const onDeleteProduct = (id) =>{

        handlerDelete(id)

    }

    return (

        <>
              <h3>Carro de compra</h3>
                    <table className="table table-hover">
                        <thead>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Eliminar</th>
                        </thead>
                        <tbody>
                            {items.map(item =>
                            (
                                
                                <tr key={item.product.id}>
                                <td>{item.product.name}</td>
                                <td>{item.product.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.quantity * item.product.price}</td>
                                <button className="btn btn-danger" onClick={() => onDeleteProduct(item.product.id)}>eliminar</button>
                            </tr>
                            ))}
                            
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end fw-bold">total</td>
                                <td colSpan="2" className="text-start fw-bold">{total}</td>
                            </tr>
                        </tfoot>

                    </table>

        </>
    )

}
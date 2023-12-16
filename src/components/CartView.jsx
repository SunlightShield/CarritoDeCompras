

export const CartView = ({ items }) => {
console.log(items)
    return (

        <>
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
                            {items.map(item =>
                            (
                                
                                <tr key={item.product.id}>
                                <td>{item.product.name}</td>
                                <td>{item.product.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.quantity * item.product.price}</td>
                                <td>eliminar</td>
                            </tr>
                            ))}
                            
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end fw-bold">total</td>
                                <td colSpan="2" className="text-end fw-bold">1234</td>
                            </tr>
                        </tfoot>

                    </table>

        </>
    )

}
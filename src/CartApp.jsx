export const CartApp = () => {

    return (

        <>

            <div className="container">
                <h3>Carrito de compras</h3>
                <div className="row">

                    <div className="col-4 mb-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Producto 1</h5>
                                <p className="card-text"> texto de ejemplo</p>
                                <p className="card-text"> $ 1000</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 mb-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Producto 2</h5>
                                <p className="card-text"> texto de ejemplo</p>
                                <p className="card-text"> $ 1000</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 mb-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Producto 3</h5>
                                <p className="card-text"> texto de ejemplo</p>
                                <p className="card-text"> $ 1000</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 mb-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Producto 4</h5>
                                <p className="card-text"> texto de ejemplo</p>
                                <p className="card-text"> $ 1000</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 mb-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Producto 5</h5>
                                <p className="card-text"> texto de ejemplo</p>
                                <p className="card-text"> $ 1000</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 mb-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Producto 6</h5>
                                <p className="card-text"> texto de ejemplo</p>
                                <p className="card-text"> $ 1000</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>
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
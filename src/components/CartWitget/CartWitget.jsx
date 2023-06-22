
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWitget = () => {
    return (
        <div className="basketContainer">
            <ShoppingCartIcon style={{fontSize: '3rem'}}/>
            <div id='cart' className='cartVertical'>
                <table id="listCart" className="tableCart">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>precio</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <a href="#" id="vaciar-carrito">Vaciar Carrito</a>
                <a href="#" id="procesar-pedido">Procesar Compra</a>
            </div>
        </div>
    )
}

export default CartWitget;
import { useContext } from 'react';
import { dataContext } from '../Context/Context';
//mui-icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWitget = () => {
    const { cart } = useContext(dataContext);
    //recorre el carrito y ve cuantos productos tiene agregado
    const itemCuanty = cart.reduce((acc, el) => acc + el.quanty , 0 );

    return (
        <div className="basketContainer">
            <ShoppingCartIcon className='imgCarrito'/>
            <span>{itemCuanty > 0 ? itemCuanty : null}</span>
        </div>
    )
}

export default CartWitget;
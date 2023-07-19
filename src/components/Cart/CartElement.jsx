import { useContext } from "react"
import { dataContext } from "../Context/Context"
import CartRepeat from "./CartRepeat";
import ClearIcon from '@mui/icons-material/Clear';

const CartElement = () => {
  const { cart, setCart } = useContext(dataContext);

  //eliminar producto
  const delateProduct = (id) => {
    const foundId = cart.find((items) => items.id === id);
    const newCart = cart.filter((items) => {
      return items !== foundId;
    });
    setCart(newCart);
  }

  return (
    cart.map((product) => {
      return (
        <div className="cart-body" key={product.id}>
          <img src={product.img} alt="imagen de producto" />
          <h4>{product.name}</h4>
          <CartRepeat product={product} />
          <h4>${(product.price * product.quanty).toFixed(3)}</h4>
          <ClearIcon style={{cursor:"pointer"}} onClick={() => delateProduct(product.id)}/>
        </div>
      )
    })
  )

}

export default CartElement
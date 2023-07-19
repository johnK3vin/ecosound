import { useContext } from "react"
import { dataContext } from "../Context/Context"

const CartRepeat = ({product}) => {
    const {cart, sendCart, setCart} = useContext(dataContext);

    //disminuye la cantidad de los productos
    const delate = () =>{
        const delateItems = cart.find((item)=> item.id === product.id);
        if (delateItems && delateItems.quanty !== 1){
          setCart(cart.map((items)=> items.id === product.id ? 
            {...product, quanty: delateItems.quanty - 1} : items))
        }
    }


  return (
    <div className="cart-repeat">
        <button onClick={delate}>-</button>
        <span>{product.quanty}</span>
        <button onClick={()=> sendCart(product)}>+</button>
    </div>
  )
}

export default CartRepeat
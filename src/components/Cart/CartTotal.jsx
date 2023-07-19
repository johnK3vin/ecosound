import { useContext } from "react"
import { dataContext } from "../Context/Context"


const CartTotal = () => {
    const {cart} = useContext(dataContext)
    //recorre la lista y suma los precios e multiplica las cantidades
    const total = cart.reduce((ecc,el) => ecc + Number(el.price) * el.quanty, 0);

    return (
        <div className="total">Total:${total.toFixed(3)}</div>
  )
}

export default CartTotal
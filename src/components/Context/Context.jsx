import { createContext, useState, useEffect} from "react"

//firebase
import { db } from "../../fireBase/fireBase";
import { collection, query, getDocs } from "firebase/firestore";


export const dataContext = createContext();

const Context = ({children}) => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    //traer todos los productos de la coleccion llamada 'producto'
    useEffect(()=>{
      const getProduct = async () => {
        const q = query(collection(db, "product"));
        const docs = [];
        const querySnapshot = await getDocs(q);
        
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setProduct(docs);
      };
      getProduct();
    },[])

    //agrega los productos al carrito segun su id
    const sendCart = (dato) => {
      const moreItems = cart.find((items) => items.id === dato.id)
      if(moreItems){
          setCart(cart.map((item) => item.id === dato.id ? {...dato, quanty:moreItems.quanty + 1}: item))
      }else{
          setCart([...cart, dato])
      }
  }


  return (
    <dataContext.Provider value={{product, cart, setCart, sendCart}}>{children}</dataContext.Provider>
  )
}

export default Context;
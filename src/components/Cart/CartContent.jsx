//componentes
import CartTotal from './CartTotal';
import CartElement from './CartElement';
import { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { dataContext } from '../Context/Context';
//firebase
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../fireBase/fireBase';
//mui
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

//estilos del modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

//string vacios para rellenarlos con datos
const initialState = {
  name :  "",
  email : "",
  emailR: "",
};


const CartContent = () => {
  const [loader, setLoader] = useState(false);
  const [loaderB, setLoaderB] = useState(false);
  const { cart } = useContext(dataContext);
  const [values, setValues] = useState(initialState);
  const [modal, setModal] = useState(false);
  const [id , setId] = useState('')
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);
  const [alertA, setAlert ]= useState(false);
  const [alertB, setAlertB ]= useState(false);


  //guarda los datos obtenidos de los textfield
  const handleOnChange = (e) => {
    const {value, name} = e.target;
    setValues({...values, [name]: value });
  };


  //configurando boton de comprar en modal
  const onSubmit = async (e) => {
    //evitar que se actualize la pagina
    e.preventDefault()
    //evitar que no queden campos sin rellenar
    if(values.name == "" || values.email == "" || values.emailR == ""){
      console.log('ingrese los campos requeridos')
      setAlert(!alertA);
      setTimeout(()=>{
        setAlert(false)
      }, 4000);
      //por si los email no coinsiden
    }else if(values.emailR != values.email){
      console.log('los email no coinsiden')
      setAlertB(!alertB);
      setTimeout(()=>{
        setAlertB(false)
      }, 4000);
    } else {
      //enviaremos los datos como una nueva coleccion llamada 'compra'
      const docRef = await addDoc(collection(db, "compra"), {
        values,
      });
      //efecto de carga
      setLoaderB(!loaderB);
      setTimeout(() => {
        setId(docRef.id);
        setLoader(!loader);
        setLoaderB(false);
        setValues(initialState);
      }, 3000);
    }
  };

  //recarga de pagina, esto hara que el carrito quede vacion una vez finalizada la compra
  const resetCart = () =>{
    if( loader && !modal ){
      location.reload()
    }else{
      setTimeout(resetCart, 1000)
    }
  };
  resetCart();

  //condicion ? "true" : "false"
  return cart.length > 0 ? (
    <div className="cartContainer">
      <h1>Mi Carrito</h1>
      <div className="cart-header">
        <h3>Imagen</h3>
        <h3>Nombre</h3>
        <h3>precio</h3>
      </div>
      <CartElement />
      <div className='cart-buy'>
        <Link className='after-buy' to='/collection'>Seguir Comprando</Link>
        <button className='ready-buy' onClick={() => handleOpen()}>Realizar Compra</button>
        <CartTotal />
        <Modal open={modal} onClose={handleClose}>
          <Box sx={style}>
            <form style={{ alignItems: "center" }} onSubmit={onSubmit} >
              <h2>Proceso de Compra</h2>
              <span style={{fontSize:'1.2rem', color: "red"}}>{ alertA ? "Por favor rellenar los campos correspondientes" : null}</span>
              <span style={{fontSize:'1.2rem', color: "red"}}>{ alertB ? "Los email no coinciden, vuelva a intentarlo" : null}</span>
              <TextField label="Nombre Completo"  name='name' style={{ width: "100%", margin:'7px' }} value={values.name} onChange={handleOnChange}/>
              <TextField label="Correo electronico" name='email'  style={{ width: "100%", margin:'7px' }} value={values.email} onChange={handleOnChange}/>
              <TextField label="Repetir Correo electronico" name='emailR'  style={{ width: "100%", margin:'7px' }} value={values.emailR} onChange={handleOnChange}/>
              <div>
                <div style={{fontSize:'2rem', textAlign:'center'}}>
                  {loader ? `Su pedido a sido realizado! Por favor guardar el siguiente codigo: ${id}` : (
                    null
                  )}
                  {loaderB ? <img src="/loader/XVo6.gif" alt="imagen de carga" style={{width:'20px'}}/> : (
                    null
                  )}
                </div>
                { loader ? null : <Button variant="contained"  onClick={onSubmit}>Comprar</Button>}
                <Button onClick={() => {
                  setValues(initialState)
                  handleClose()
                }}>Cancelar</Button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  ) : (
    <div style={{height:'50%', margin: '2rem', textAlign:'center'}}>
      <h1>Mi Carrito Esta Vacio</h1>
      <div>
        <img src="/cart/empty_cart.png" alt="carrito vacio" />
      </div>
    </div>
  )
}

export default CartContent
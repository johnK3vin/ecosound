import data from '../../data/data.json';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const {id} = useParams();

    console.log(id)

    const producto =  data.filter((items)=>{
        return items.id === id;
    })

    return (
        <div className="detailContainer">
            <div className="imgDetail">
                <img src={producto[0].img} alt="imagen de producto" />
            </div>
            <div className="DetailText">
                <div>
                    <h3>{producto[0].name}</h3>
                    <h2>{producto[0].type}</h2>
                </div>
                <div className='price'>
                    <span>Precio: ${producto[0].price}</span>
                </div>
                <div className='detailProduct'>
                    <div><p>Descripcion:</p></div>
                    <div>{producto[0].description}</div>
                    <div><p>Caracteristicas:</p></div>
                    <div>{producto[0].detail}</div>
                </div>
            </div>
            <div className='detailPrice'>
                <div className='send'>
                    <p>Envio gratis</p>
                </div>
                <div className='sales'>
                    <p>Tienda oficial <span>EcoSound</span></p>
                    <p>+1000 ventas</p>
                </div>
                <div>
                    <button className='sendButton'>comprar ahora</button>
                    <button className='cartButton'>agregar carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
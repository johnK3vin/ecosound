import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { dataContext } from "../Context/Context";
//fireBase
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from "../../fireBase/fireBase";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [loader, setLoader] = useState(false);
    const [dato, setDato] = useState([]);
    const { sendCart } = useContext(dataContext);
    const { img, name, type, description, detail, price } = dato;

    //efecto de carga
    useEffect(() => {
        setTimeout(() => {
            setLoader(true);
        }, 1000);
    }, []);

    //traer el producto segun su id 
    useEffect(() => {
        const getProduct = async () => {
            const q = query(
                collection(db, "product"),
                where(documentId(), "==", id)
            );
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            //me tiraba error al solo poner DOCS asi que puse que me agregara el primer indice
            setDato(docs[0]);
        };
        getProduct();
    }, [id]);


    return (
        <div>
            {loader ? (
                <div className="detailContainer">
                    <div className="imgDetail">
                        <img src={img} alt="imagen de producto" />
                    </div>
                    <div className="DetailText">
                        <div className="detailTitle">
                            <h3>{name}</h3>
                            <h2>{type}</h2>
                        </div>
                        <div className='price'>
                            <span>Precio: ${price}</span>
                        </div>
                        <div className='detailProduct'>
                            <div><p>Descripcion:</p></div>
                            <div style={{ fontSize: '1.5rem', width:'400px' }}>{description}</div>
                            <div><p>Caracteristicas:</p></div>
                            <ul id="myList">
                                {detail ? (
                                    dato.detail.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                                ) : (
                                    <li>Cargando...</li>
                                )}
                            </ul>
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
                        <div >
                            <Link to='/cart' className='sendButton' onClick={() => sendCart(dato)}>comprar ahora</Link>
                            <Link className='sendButton' onClick={() => sendCart(dato)}>agregar carrito</Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <img src='/loader/XVo6.gif' alt="imagen de carga" style={{ width: '200px' }} />
                </div>
            )}
        </div>
    );
}

export default ItemDetailContainer;
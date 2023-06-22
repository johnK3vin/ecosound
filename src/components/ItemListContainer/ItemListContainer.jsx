import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import data from '../../data/data.json';
import CardUser from "../CardUser/CardUser";


const ItemListContainer = () => {
    const [datos, setDatos]= useState([]);

    useEffect(() => {
        setDatos(data)
    }, []);

    return (
        <div className="itemContainer">
            {datos.map((dato) => {
                return (
                    <div key={dato.id}>
                        <Link to={`/detail/${dato.id}`}>
                            <CardUser dato= {dato}/>
                        </Link>
                    </div>
                );
            })}
        </div>
    )
}

export default ItemListContainer;
import CardUser from '../CardUser/CardUser';
import {useEffect, useState} from "react";
import data from '../../data/data.json';
import { Link } from 'react-router-dom';


const CardList = () => {

    const [datos, setDatos]= useState([]);

    useEffect(() => {
        setDatos(data)
    }, []);

    return <div className='listUsers'>
        {datos.map((dato)=> {
            return (
                <div key={dato.id}>
                    <Link to={`detail/${dato.id}`}>
                        <CardUser dato= {dato}/>
                    </Link>
                </div>
            )
        })}
  </div>
}

export default CardList;
import data from '../../data/data.json';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const DetailPages = () => {

    const {id} = useParams();

    const [dato , setDato] = useState([]);

    useEffect(()=>{
        const product = data.filter((items)=>{
            return items.id === id
        })
        setDato(product)
    }, [id])


    return (
        <div className="detailContainer">
            <div className="imgDetail">
                <img src={dato.img} alt="imagen de producto" />
            </div>
            <div className="DetailText">
                <div>
                    <h1>{dato[2]}</h1>
                </div>
                <div>
                    <span>232</span>
                </div>
                <div>
                    <p>texto xxxx</p>
                </div>
            </div>
        </div>
    );
}

export default DetailPages;
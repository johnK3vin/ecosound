import { useContext } from "react";
import { dataContext } from "../Context/Context";
import { Link } from "react-router-dom";
import CardUser from "../CardUser/CardUser";

const ItemListContainer = () => {
    const {product} = useContext(dataContext)

    return (
        <div className="itemContainer">
            {product.map((dato) => {
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
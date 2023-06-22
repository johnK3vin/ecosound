import { useParams, Link } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";
import data from '../../data/data.json';

const Category = () => {

    const { categoryId } = useParams();

    console.log(categoryId)

    const producto =  data.filter((items)=>{
        return items.type === categoryId;
    })

    return (
        <div className="listUsers">
        {producto.map((dato)=> {
            return (
                <div key={dato.id}>
                    <Link to={`/detail/${dato.id}`}>
                        <CardUser dato= {dato}/>
                    </Link>
                </div>
            )
        })}
        </div>
    );
}

export default Category;
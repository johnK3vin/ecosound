import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CardUser from "../../components/CardUser/CardUser";
//firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../fireBase/fireBase";


const Category = () => {
    const { categoryId } = useParams();
    const [category, setCategory] = useState([]);
    const [loader, setLoader] = useState(false);

    //efecto de carga
    useEffect(() => {
        setTimeout(() => {
            setLoader(true);
        }, 1000);
    }, []);

    useEffect(() => {
        //traer los productos segun su type y agregarlos a una lista
        const getProduct = async () => {
            const q = query(collection(db, 'product'),
                where('type', '==', categoryId));
            const docs = [];
            const queryHot = await getDocs(q);
            queryHot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            });
            setCategory(docs);
        };
        getProduct();
    }, [categoryId])

    return loader ? (
        <div>
            <div className="collection-category">
                <Link to='/category/Audifono Professional' className="button-link">
                    Audifonos Professionales
                </Link>
                <Link to='/category/Audifono Inalambrico' className="button-link">
                    Audifonos Inalambricos
                </Link>
            </div>
            <div className="listUsers">
                {category.map((dato) => {
                    return (
                        <div key={dato.id}>
                            <Link to={`/detail/${dato.id}`}>
                                <CardUser dato={dato} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src='/loader/XVo6.gif' alt="imagen de carga" style={{ width: '200px' }} />
        </div>
    );
}

export default Category;
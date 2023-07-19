import { Link } from "react-router-dom";

import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const CollectionPage = () => {
    return (
        <div>
            <div className="collection-category">
                <Link to='/category/Audifono Professional' className="button-link">
                    Audifonos Professionales
                </Link>
                <Link to='/category/Audifono Inalambrico' className="button-link">
                    Audifonos Inalambricos
                </Link>
            </div>
            <ItemListContainer />
        </div>
    )
}

export default CollectionPage;
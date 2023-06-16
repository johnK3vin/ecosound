import { Link, useLocation } from "react-router-dom";


const Breadcrumbs= () => {

    const localition = useLocation();

    let correntLink = '';

    const crumbs = localition.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            correntLink += `/${crumb}`;

            return (
                <div className="crumb" key={crumb}>
                    <Link to={correntLink}>{crumb}</Link>
                </div>
            )
        })

    return (
        <div className="breadCrumbs">
            {crumbs}
        </div>
    );
}
export default Breadcrumbs;
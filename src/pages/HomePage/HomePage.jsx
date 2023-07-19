import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';


const HomePage = () => {
    return (
        <div>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true" style={{margin: "0"}}>
                <div className="carousel-inner" style={{position: 'relative', zIndex: 1}}>
                    <div className="carousel-item active">
                        <img src="./carusel/1.png" className="imgCarusel" alt="imagen de carrusel"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./carusel/2.png" className="imgCarusel" alt="imagen de carrusel"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./carusel/3.png" className="imgCarusel" alt="imagen de carrusel"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div>
                <div className='destacateProduct'>
                    <h3>Productos destacados</h3>
                </div>
                <div>
                    <ItemListContainer />
                </div>
            </div>
            
        </div>
    );
}

export default HomePage;
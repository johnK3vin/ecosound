import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

//sass
import './style/style.scss';



//page
import CollectionPage from './pages/CollectionPage/CollectionPage';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContacPage/ContactPage';
import DetailPages from './pages/DetailPage/DetailPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';



function App() {
  return (  
    <BrowserRouter>
      <div className='App'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/collection' element={<CollectionPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/detail/:id' element={<DetailPages/>}/>
          <Route path='/category/:categoryId' element={<CategoryPage/>}/>
        </Routes>
        <div className="collectionLinks">
            <Link to='/category/Audifono Professional'>
              Audifonos Professionales
            </Link>
            <Link to='/category/Audifono Inalambrico'>
                Audifonos Inalambricos
            </Link>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;

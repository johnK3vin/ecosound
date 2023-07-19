import { BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Context from './components/Context/Context';
import Category from './components/Category/Category';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContent from './components/Cart/CartContent';

//sass
import './style/style.scss';


//page
import CollectionPage from './pages/CollectionPage/CollectionPage';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContacPage/ContactPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';




function App() {
  return (
    <Context>
    <BrowserRouter>
      <div className='App'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/collection' element={<CollectionPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:categoryId' element={<Category/>}/>
          <Route path='/cart' element={<CartContent/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    </Context>
  )
}

export default App;

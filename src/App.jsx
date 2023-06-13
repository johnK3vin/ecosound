import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

//sass
import './style/style.scss';

//logo
import logo from  "./assets/eco-sound.png";

//page
import CollectionPage from './pages/CollectionPage/CollectionPage';
import HomePage from './pages/HomePage/HomoPage';
import ContactPage from './pages/ContacPage/ContactPage';
import DetailPages from './pages/DetailPage/DetailPage';



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
        </Routes>
        <Footer logo={logo}/>
      </div>
    </BrowserRouter>
  )
}

export default App;

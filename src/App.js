
import './App.css';
import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";


import Delivery from './components/delivery';
import Dishes from './components/dishesComponent/dishes';
import Shop from './components/shop';
import Cart from './components/cart/cart';
import Footer from './components/footer';
import ScrollToTop from './scrollToTop';
import ScrollToTopButton from './scrollToTopButton';
import LoaderPage from './components/loader/loaderPage';
import { useEffect, useState } from 'react';

function App() {
  const [stateLoader, setStateLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout (() => setStateLoader(false), 1000 )
    return () => clearTimeout(timer)
  }, [])


  return (

  <div> 
    { stateLoader ?   (<LoaderPage/>) :      
        ( <div>
          <Router>
          <ScrollToTop />
            <Navbar expand="lg"  sticky="top" className="navbar bg-body-tertiary  " >
                <Container >
                  <Navbar.Brand ><Link className='link ' to="/trapeza.github.io"> Трапеза</Link></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav " >
                  <Nav className="me-auto  "  >
                    <Nav.Link as={Link} className='link ' to="/dishes">Меню</Nav.Link>
                    <Nav.Link as={Link} className='link ' to="/delivery">Доставка</Nav.Link>
                    <Nav.Link  as={Link} className='link ' to="/cart">Корзина </Nav.Link>
                  </Nav>
                  </Navbar.Collapse>
                </Container> 
              </Navbar>

              <Routes>
                <Route path='/trapeza.github.io' element = { <Shop/> }/>
                <Route path='/dishes' element = { <Dishes/> }/>
                <Route path="/delivery" element = { <Delivery/> }/>
                <Route path="/cart" element={ <Cart/> }/>
              </Routes>
            </Router>

            <Footer/>
            <ScrollToTopButton/>
        </div>)}
 
  </div>
  ); 
}

export default App;



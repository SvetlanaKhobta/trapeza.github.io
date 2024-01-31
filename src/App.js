
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


function App() {


  return (
    <div> 
       
         <Router>
   <Navbar expand="lg"  sticky="top" className="navbar bg-body-tertiary  " >
<Container >
  <Navbar.Brand ><Link className='link ' to="/"> Трапеза</Link></Navbar.Brand>
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
   </div>
  ); 
}

export default App;
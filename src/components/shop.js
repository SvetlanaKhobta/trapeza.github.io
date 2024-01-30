import '../App.css';
import Image from 'react-bootstrap/Image';
import imgCook from '../images/povar.jpg'
import { Link } from 'react-router-dom';
import LoaderPage from './loader/loaderPage';
import { useEffect, useState } from 'react';
function Shop(){
    const [stateLoader, setStateLoader] = useState(true);
    useEffect(() => {
      const timer = setTimeout (() => setStateLoader(false), 2000 )
      return () => clearTimeout(timer)
    }, [])
    return(
        <div>
          { stateLoader && <LoaderPage/>}     
        <div className='header'>
            <h1>Кафе Трапеза</h1>
            <h3>Мы готовим, вы отдыхаете</h3>
            <h4>Закажите вкусные и свежие блюда с доставкой</h4>
          
       </div>
      
       <div>
            <Image src={imgCook} fluid />
       </div>
       <div className='header' >
            <p>Часы работы: ежедневно с 09.00 до 21.00</p>
            <p>Мы находимся по адресу: Москва, ул. Свободы, 71, корп. 3</p>
            <Link className='link back' to="/dishes">Посмотреть меню</Link>
       </div>

     
           </div>

    )
}
export default Shop;
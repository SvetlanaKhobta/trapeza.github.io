import '../App.css';
import Image from 'react-bootstrap/Image';
import imgCook from '../images/povar.jpg'
import { Link } from 'react-router-dom';

function Shop(){
  
    return(
        <div className='header'>

            <h1>Кафе Трапеза</h1>
            <h3>Мы готовим, вы отдыхаете</h3>
            <h4>Закажите вкусные и свежие блюда с доставкой</h4>
            <Image src={imgCook} fluid />    
            <p>Часы работы: ежедневно с 09.00 до 21.00</p>
            <p>Мы находимся по адресу: Москва, ул. Свободы, 71, корп. 3</p>
            <Link className='link back' to="/dishes">Посмотреть меню</Link>
        </div>

    )
}
export default Shop;
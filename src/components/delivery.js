import Image from 'react-bootstrap/Image';
import imgDelivery from '../images/delivery.jpg'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

function Delivery(){
    return(
      
        <div className='header'>
            <h3>Условия доставки</h3>
          
      
            <CardGroup className='text-center '>

            <Card >
            <Card.Header>Доставка бесплатная</Card.Header>
              <Card.Body>
                <Card.Text>
                Заказы на доставку день в день принимаются с 09.00 до 19.00. Заказы на другой день принимаются с 09.00 до 21.00. 
                </Card.Text>
              </Card.Body>
            </Card >

            <Card >
            <Card.Header>Минимальная сумма заказа — 1500 ₽</Card.Header>
              <Card.Body>
                <Card.Text>
                Время доставки заказа от 30 до 90 минут.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card >
            <Card.Header>Доставка с 10.00 до 22.00 в пределах МКАД</Card.Header>
              <Card.Body>
                <Card.Text>
                Время доставки мясных блюд может быть увеличено.
                </Card.Text>
              </Card.Body>
            </Card>

          </CardGroup>
        
            <Image src={imgDelivery} fluid />
            <Link className='link back' to="/dishes">Посмотреть меню</Link>
      
          
          </div>
    )
}
export default Delivery;
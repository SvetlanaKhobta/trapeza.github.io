
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
  return (
    <Card className="text-center" >
      <Card.Header className='bg-body-tertiary '>Кафе Трапеза</Card.Header>

      <Card.Body  >

        <Card.Title>Позвонить нам</Card.Title>
        <Card.Text>
        <a href="tel:+79248607279" className='link'>89248607279</a> 
        </Card.Text>

        <Card.Title>Наш телеграм</Card.Title>
        <Card.Text >
        <a  href="https://t.me/svetlanakhobta" className='link'>@trapeza</a>
        </Card.Text>

        <Card.Title>Отправить письмо</Card.Title>
        <Card.Text>
        <a  href="mailto:svetoch_1980@mail.ru" className='link'>trapeza@mail.ru</a>
        </Card.Text>

      </Card.Body>
      
      <Card.Footer className="bg-body-tertiary">©2024 </Card.Footer>
    </Card>
  );
}

export default Footer;
import plus from '../../images/plus.png'
import minus from '../../images/minus.png'
const ChangeQuantyti = ({quantyti, setQuantyti}) => {

    const addQuantyti = () => {
        const newQuantyti = quantyti+1;
        setQuantyti(newQuantyti)
    }
    const removeQuantyti = () => {
        if(quantyti <= 1) return;
        const newQuantyti = quantyti-1;
        setQuantyti(newQuantyti)
    }
    return(<div className="portion">
        <span>Порции:</span>
        <button className="button" onClick={addQuantyti}><img src={plus} width="30px" alt='plus'/></button>
        <span>{quantyti}</span>
        <button  className="button" onClick={removeQuantyti}><img src={minus} width="30px" alt='minus'/></button>
    </div>)
}
export default ChangeQuantyti;
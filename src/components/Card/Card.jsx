import './card.css';
import { Link } from 'react-router-dom';

const Card = ({item, addCart}) => {

    const textFunc = (text, length) =>{
        if(text.length > length){
            return text.substr(0, length - 3).trim() + '...'
        } else{
            return text
        }
    }

    return (
        <div className="card">
            <Link to={`/product/${item.id}`} >
                <img className='card-img' src={item.image} alt="" />

            <h2 className='card-title'>{textFunc(item.title, 30)}</h2>
            </Link>
            <p className='card-text'>{textFunc(item.description, 40)}</p>
            <p>category: {item.category}</p>
            <div className="card-block">
                <p>price: ${item.price}</p>
                <button onClick={()=>{
                    addCart(item)
                }} className='card-btn'>buy</button>
                
            </div>
        </div>
    );
}

export default Card;

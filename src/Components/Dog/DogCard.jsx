import { useContext, useState } from 'react';
import './Dog.scss'
import { CartContext } from '../../Context/CartContext';
const DogCard = (props) => {
    const { addMyCart, setTotal, total } = useContext(CartContext);
    const { name, breed, description, price, imageUrl } = props;
    const [isAdd, setAdd] = useState(true)
    const handleBtn = () => {
        setAdd(false);
        const newItem = {
            name, price, imageUrl
        }
        setTotal(+total + +price);
        addMyCart((item) => [...item, newItem]);
    }
    return (
        <div>
            <div className="dog-info">
                <div className='img'> <img className="img" src={imageUrl} alt="" /></div>
                <div className="name">  {name} </div>
                <div className="breed">  {breed} </div>
                <div className="description">  {description} </div>
                <div className="price">  {price} $ </div>
                {(isAdd) ?
                    (<button className='btn' onClick={() => handleBtn()}>ADD TO CART</button>)
                    : <button className='btn-disable' onClick={() => setAdd(true)}>ADDED</button>}

            </div>
        </div >
    )
}
export default DogCard;
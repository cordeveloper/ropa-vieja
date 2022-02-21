import {AiOutlineShoppingCart} from 'react-icons/ai';
import './cartIndicator.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartIndicator = () => {

    const {productsSelected} = useSelector(state => state.products);

    return(
        <Link to="/cart"> 
            <div className="cart__container">
                <AiOutlineShoppingCart size="32"/>
                <div className="cart__indicator">
                    {productsSelected.length}
                </div>
            </div>
        </Link>
    );
}

export default CartIndicator;
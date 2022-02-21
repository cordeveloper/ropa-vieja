import './product.scss';
import { Link } from 'react-router-dom';
import Loader from '../loader/loader';
import { useState } from 'react';
const Product = ({image, title, price, category, id}) => {
    const [isLoad, setIsLoad] = useState(false);
    return (
        <Link to={{pathname: `/product/${id}`}}>
            <article class="product__thumbnail">
                <div class="product__header">
                    <div className="product__category">
                        {category}
                    </div>
                {!isLoad &&
                    <Loader />
                }
                <img onLoad={()=>{setIsLoad(true)}} src={image} alt="" />  

                </div>
                <div className="product__footer">
                    <div className="product__title">
                        {title}
                    </div>
                    <div className="product__price">
                        {price}€
                    </div>
                </div>
            </article>
        </Link>
    );
}

export default Product;
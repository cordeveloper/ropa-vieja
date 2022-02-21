import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import './detailProduct.scss';
import Loader from "../loader/loader";
import { useDispatch } from "react-redux";
import { selectedProducts } from "../../state/actions";

const DetailProduct = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const dispatch = useDispatch();

    useEffect( () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then( response => setProduct(response.data))
        .catch(error => console.error(error));
    });

    


    return (
        <div className="detailProduct">
            <div className="detailProduct__display">
                <div className="relative">
                    {!isLoad &&
                        <Loader />
                    }
                    <img onLoad={ () => {setIsLoad(true)} } src={product.image} alt="" />
                </div>
                <div>
                    <h1 className="detailProduct__title">{product.title}</h1>
                    <h2 className="detailProduct__subtitle">{product.category}</h2>
                    <h3>Description</h3>
                    <p>
                        {product.description}
                    </p>
                    <p className="detailProduct__price">
                        {product.price}<span>€</span>
                    </p>
                    <button onClick={ () => {dispatch(selectedProducts(product))} } className="button-buy">Comprar ya</button>
                </div>
            </div>
        </div>
    )
}  

export default DetailProduct;
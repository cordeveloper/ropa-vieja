import { useSelector } from "react-redux";
import './list.scss';
import Product from "../product/product";


const ListProducts = () => {
    const {products} = useSelector(state => state.products);
    const {search} = useSelector(state => state.search);
    console.log(search);
    return (
     <div className="list">
         {products.filter(product => product.title.toLowerCase().includes(search.toLowerCase())).map(product => <Product key={product.id} {...product} />)}
     </div>
    )
}

export default ListProducts;
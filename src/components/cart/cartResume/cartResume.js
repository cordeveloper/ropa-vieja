import { useSelector } from "react-redux";
import './cartResume.scss';

const CartResume = () => {
    const {productsSelected} = useSelector(state => state.products);

    const products = [...productsSelected.reduce((r, e) => {
        let k = `${e.x}|${e.y}`;
        if(!r.has(k)) r.set(k, {...e, count: 1})
        else r.get(k).count++
        return r;
      }, new Map).values()];

      console.log(products);

      return (
        <div className="cartResume">
           
            <h1>CART</h1>
            <div>
                { productsSelected.map(product => {
                    return (
                    <div key={product.id} className="cartResume__row">
                        <div>
                            <img src={product.image} alt="" />
                        </div>
                        <div>
                            {product.title} x <span>{product.count}</span> 
                        </div>
                        <div className="cartResume__line"></div>
                        
                    </div>
                    )
                }) }
            </div>
           
        </div>
    )

    
}

export default CartResume;
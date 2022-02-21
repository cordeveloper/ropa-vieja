import './searcher.scss';
import {FaSearch} from 'react-icons/fa';
import {useEffect, useState, useRef} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchWord } from '../../state/actions';
import { useDispatch } from 'react-redux';

const Searcher = () => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const {products} = useSelector(state => state.products);
    const {search} = useSelector(state => state.search);
    const ref = useRef();
    const dispatch = useDispatch();

   
    const handleSearch = (e) => {
        dispatch(searchWord(e.target.value));
        setShowSuggestions(true);
    }

    useEffect( () => {
        const checkIfCliceckOutside = e => {
            
            if(showSuggestions && ref.current && !ref.current.contains(e.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('click', checkIfCliceckOutside);
        return () => {
            document.removeEventListener('click', checkIfCliceckOutside);
        }
    }, [showSuggestions] );

   
    return (
        <div className="searcher__container" ref={ref}>
            <input className="searcher__input" type="text" onChange={handleSearch}  />
            {showSuggestions && 
                <div className="searcher-suggestions__container">
                    {products.filter(product => product.title.toLowerCase().includes(search.toLowerCase())).map( product => 
                            <div className="searcher__suggestion" key={product.id}>
                                <Link to={{pathname: `/product/${product.id}`}} onClick={ () => {setShowSuggestions(false)} }>
                                    {product.title}
                                </Link>
                              
                            </div>
                    )
                    }
                       
                </div>
            }
            <button className="searcher__button">
                <FaSearch size="25"/>
            </button>
        </div>
    )
}

export default Searcher;
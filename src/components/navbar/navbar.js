import './navbar.scss';
import Searcher from '../searcher/searcher';
import CartIndicator from '../cart/cartIndicator/cartIndicator';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar__container">
            <div className="container">
                <Link to="/">
                    <h1 className="navbar__title">Ropa Vieja</h1>
                </Link>
               <Searcher />
               <CartIndicator />
            </div>
        </nav>
    )
}

export default Navbar;
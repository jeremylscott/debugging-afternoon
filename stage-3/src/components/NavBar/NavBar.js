import React, { Component } from 'react';
import './NavBar.css';
import Logo from '../../images/dev-mountain-logo.png'
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import StoreFront from '../StoreFront/StoreFront';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

class NavBar extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="navbar-container">
                    <div className="logo-container">
                        <Link to="/" component={Home}><img className="logo-image" src={Logo} alt="" /></Link>
                    </div>

                    <div className="navbar-links-container">
                        <ul className="navbar-links">
                            <li><Link to="/" component={Home}>Home</Link></li>
                            <li><Link to="/storefront" component={StoreFront}>Store</Link></li>
                            <li><Link to="/shoppingcart" component={ShoppingCart}>Shopping Cart</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default NavBar;
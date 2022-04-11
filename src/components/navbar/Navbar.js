import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from './../../assets/img/baymax.jpeg'

const Navbar = () => {
    return (
        <nav>
            <header className="header">
                <Link to="/home" className="logo textItem">
                    MrDavidAlv
                </Link>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li><Link className="textItem" to="/home">Home</Link></li>
                    <li><Link className="textItem" to="/service">Service</Link></li>
                    <li><Link className="textItem" to="/product">Products</Link></li>
                    <li><Link className="textItem" to="/store">Store</Link></li>
                    <li><Link className="textItem" to="/contact">Contact</Link></li>
                </ul>
            </header>
        </nav>
    )
}

export default Navbar
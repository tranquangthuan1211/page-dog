import React from "react";
import { Link } from "react-router-dom";
import './Nav.scss'
const Nav = () => {
    return (
        <div className="nav">
            <Link className="my-header" to='/'> HOME</Link>
            <Link className="my-header" to='/dog'> DOGS</Link>
            <Link className="my-header" to='/cart'> MY CART</Link>

        </div>
    )
}
export default Nav;
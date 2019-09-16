import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";



class NavBar extends Component {
    
    render() { 
        return ( 
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link"> Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Dairy" className="nav-link">Dairy</Link>
                </li>
                <li className="nav-item">
                    <Link to="/MeatDept" className="nav-link">Meat Department</Link>
                </li>
                <li className="nav-item">
                    <Link to="/FrozenDept" className="nav-link">FrozenDept</Link>
                </li>
            </ul>
         );
    }
}
 
export default NavBar;
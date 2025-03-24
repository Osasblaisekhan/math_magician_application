import React from 'react';

import { Link } from 'react-router-dom';

import './nav.css';

const Navbar = () => (
    <nav>
        <div className='logo'>
            <h1>MATH MAGICIAN APPLICATION</h1>
        </div>
        <ul className='list-container'>
            <li>
                <Link to={'/'}>HOME</Link>
            </li>
            <li>
                <Link to={'/calculator'}>Calculator</Link>
            </li>
            <li>
                <Link to={'/quote'}>Quote</Link>
            </li>
            <li>
                <Link to={'/bible'}>Bible Qutoes</Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;
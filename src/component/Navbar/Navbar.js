import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-info  shadow-lg d-flex justify-content-center'>
            <Link to='/'>Home</Link>
            <Link to='/singup'>Singup</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default Navbar;  
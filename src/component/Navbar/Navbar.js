import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase/useFirebase';

const Navbar = () => {
    const { user, handelSignOut } = useFirebase();
    return (
        <div className='bg-info  shadow-lg d-flex justify-content-center'>
            <Link to='/'>Home</Link>
            <Link to='/singup'>Singup</Link>
            <span>{user?.displayName && user?.displayName}</span>
            {user?.uid ? <button onClick={handelSignOut}>Sign Out</button> :
                <Link to='/login'>Login</Link>
            }
        </div>
    );
};

export default Navbar;  
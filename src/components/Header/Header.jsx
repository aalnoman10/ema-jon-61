import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { setUser, user, loginOut } = useContext(AuthContext)

    const handleLoginOut = () => {
        loginOut()
            .then(() => {
                setUser(null)
            }).catch((error) => {
                console.error(error);
            });
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/sing-up">Sing up</Link>
                {/* <Link to="/login">Login</Link> */}

                {user ? <>
                    <Link to="/profile">{user.email}</Link><Link onClick={handleLoginOut}>sing Out</Link></>
                    : <Link to="/login">Login</Link>
                }
            </div>
        </nav >
    );
};

export default Header;
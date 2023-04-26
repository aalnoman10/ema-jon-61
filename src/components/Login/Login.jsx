import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='text-center'>Login</h2>
            <form className="form">
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' className='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' className='password' required />
                </div>
                <button className='btn login' type="submit">Login</button>
            </form>
            <small className='text-center'>New to Ema Jon ?<Link to='/sing-up'>Sing Up</Link></small>
            <div className="hr-gr">
                <hr /><p>or</p><hr />
            </div>
            <button className='btn google'>Login with Google</button>
        </div>
    );
};

export default Login;
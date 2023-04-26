import React from 'react';
import { Link } from 'react-router-dom';

const SingUp = () => {
    return (
        <div className='form-container'>
            <h2 className='text-center'>Sing Up</h2>
            <form className="form">
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' className='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' className='password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name='confirm' className='password' required />
                </div>
                <button className='btn login' type="submit">Login</button>
            </form>
            <small className='text-center'>Already have an Account<Link to='/login'>Login</Link></small>
            <div className="hr-gr">
                <hr /><p>or</p><hr />
            </div>
            <button className='btn google'>Login with Google</button>
        </div>
    );
};

export default SingUp;
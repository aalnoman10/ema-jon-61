import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { setUser, login } = useContext(AuthContext)

    const handleLoginForm = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log('f', email, password);

        login(email, password)
            .then(r => {
                setUser(r.user)
                e.target.reset()
            })
            .catch(er => {
                setError(er.message)
            })
    }

    return (
        <div className='form-container'>
            <h2 className='text-center'>Login</h2>
            <form onSubmit={handleLoginForm} className="form">
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
            <small className='text-center'>forgotten password <Link>Reset</Link></small>
            <div className="hr-gr">
                <hr /><p>or</p><hr />
            </div>
            <button className='btn google'>Login with Google</button>
        </div>
    );
};

export default Login;
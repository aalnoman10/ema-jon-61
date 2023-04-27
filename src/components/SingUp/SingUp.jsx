import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const SingUp = () => {

    const { setUser, createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log('f', email, password, confirm);

        // 
        setError('')
        if (password.length < 6) {
            setError('too small')
        } else if (confirm !== password) {
            setError('not Macth')
        }

        // 
        createUser(email, password)
            .then(r => {
                setUser(r.user)
                form.reset()
            })
            .catch(er => {
                setError(er.message)
            })
    }


    return (
        <div className='form-container'>
            <h2 className='text-center'>Sing Up</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' className='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' className='password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' className='password' required />
                </div>
                <button className='btn login' type="submit">Login</button>
            </form>
            <small className='text-center'>Already have an Account<Link to='/login'>Login</Link></small>
            <div className="hr-gr">
                <hr /><p>or</p><hr />
            </div>
            <button className='btn google'>Login with Google</button>
            <p>{error}</p>
        </div>
    );
};

export default SingUp;
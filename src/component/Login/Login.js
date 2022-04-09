import React from 'react';
import useFirebase from '../../hooks/useFirebase/useFirebase';




const Login = () => {
    const {singInWithGoogle} =useFirebase()
    return (
        <div className='w-50 p-5 m-5 shadow-lg mx-auto'>
            <h3 className='primary'>Plase Login</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <button onClick={singInWithGoogle} className='btn btn-info my-2'>Login with google</button>
        </div>
    );
};

export default Login;
import React, { useState, useEffect } from 'react'
import Layout from '../common/Layout'
import { useRouter } from 'next/router';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);

    const router = useRouter();
    
    const submitHandler = async ( e ) => {
        e.preventDefault();       
        setLoader(true)

        if( "" == email || "" == password ){
            setLoader(false)
            toast.error("Both fields are required!");
            return false;
        }
       
        const user = await fetch(  `/api/users/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "email": email, "password": password })
        } )
        const userJson = await user.json()
        console.log(userJson)

        setLoader(false)

        if( userJson.status ){
            toast.success(userJson.message + ' You will be redirecting to dashboard page...');
            if(userJson.user._id){
                localStorage.setItem('user_id', userJson.user._id);
            }
            setTimeout(() => {
                router.push('/dashboard')
            }, 3000);
        }else{
            toast.error(userJson.message);
        }
        
        

        return false;
    }

    // Go to dahboard if you have already logged in
    useEffect(() => {
        if(localStorage.getItem('user_id')){
            router.push('/dashboard')
        }      
    })
    
    return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <form className='my-5' method='POST' onSubmit={submitHandler}>
                            <h3 className='fw-bold'> Login </h3>
                            <div className="input-group flex-nowrap my-3">
                                <span className="input-group-text" id="addon-wrapping">Username * </span>
                                <input type="text" className="form-control" placeholder="Username" name='username' id='username' onChange={ (e) => setEmail( e.target.value ) } />
                            </div>
                            <div className="input-group flex-nowrap my-3">
                                <span className="input-group-text" id="addon-wrapping">Password * </span>
                                <input type="password" className="form-control" placeholder="Password" name='password' id='password' onChange={ (e) => setPassword( e.target.value ) } />
                            </div>
                            <div className="hstack my-3">
                                {/* <input type='submit' value="Submit" className='btn btn-primary' /> */}
                                <button className='btn btn-primary'> Submit </button>
                                { loader ?
                                    <div className="spinner-grow text-primary m-4" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                : 
                                    null
                                }
                            </div>
                        </form>
                        <ToastContainer
                                    position="top-center"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="light"
                                    />
                    </div>
                </div>
            </div>
    )
}

export default Login
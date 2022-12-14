import React, { useState } from 'react'
import {ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
const { register, handleSubmit, watch, formState: { errors } } = useForm();

import 'react-toastify/dist/ReactToastify.css';


const initialValues = {
    fullname: "",
    mobile: "",
    email: "",
    username: "",
    password: ""
};
function Login() {
    const [formdata, setFormdata ] = useState(initialValues)
    const [loader, setLoader] = useState(false);

    const onChange = (e) => {
        const { name, value } = e.target;

        setFormdata({
            ...formdata, 
            [name]: value,
        }) 
        console.log(formdata)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true)
        try {
            
            const user = await fetch(  `/api/users`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formdata)
            } )
            const userJson = await user.json()
            
            setLoader(false)
            if( userJson.status == true ){
                setFormdata(initialValues)
                toast.success('🦄 User is created!');
            }else{
                toast.error(userJson.message);
            }
            
        } catch (error) {
            setLoader(false)
            setFormdata(initialValues)
            toast.error(error.message);
        }

    }
    return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <form className='my-5' method='post' onSubmit={handleSubmit}>
                            <h3 className='fw-bold'> User Registration </h3>
                            <div className="input-group flex-nowrap my-3">
                                <span className="input-group-text" id="addon-wrapping">Full Name </span>
                                <input 
                                value={formdata.fullname}
                                type="text" className="form-control" placeholder="full Name" name='fullname' onChange={onChange} />
                            </div>
                            <div className="input-group flex-nowrap my-3">
                                <span className="input-group-text" id="addon-wrapping">Email </span>
                                <input type="email" value={formdata.email} className="form-control" placeholder="Email" name='email'  onChange={onChange}  />
                            </div>
                            <div className="input-group flex-nowrap my-3">
                                <span className="input-group-text" id="addon-wrapping">Mobile </span>
                                <input type="text" value={formdata.mobile} className="form-control" placeholder="Mobile" name='mobile'  onChange={onChange} />
                            </div>
                            <div className="input-group flex-nowrap my-3">
                                <span className="input-group-text" id="addon-wrapping">Password </span>
                                <input type="text" value={formdata.password} className="form-control" placeholder="Password" name='password'  onChange={onChange} />
                            </div>
                            <div className="hstack my-3">
                                <button className='btn btn-primary'> Submit </button>
                                { loader ?
                                    <div className="spinner-grow text-primary m-4" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                : 
                                    null
                                }
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
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Login
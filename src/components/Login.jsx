import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { API_HOST } from './../utils/constants';
import { toast } from 'react-toastify';

const Login = () => {
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [loginForm, setLoginForm] = useState(true);
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${API_HOST}/login`, {
                emailId,
                password
            }, {
                withCredentials: true
            })
            dispatch(addUser(res.data));
            navigate("/feed")
        } catch (err) {
            setError(err?.response?.data);
            console.error(err);
        }
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            console.log("clicked");
            const response = await axios.post(`${API_HOST}/signup`, { firstName, lastName, emailId, password }, { withCredentials: true });
            console.log(response);
            dispatch(addUser(response.data));
            toast.success("User created successfully");
            navigate("/profile");
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='flex justify-center text-white'>
            <div className='bg-gray-900 rounded-xl w-1/3 mt-10 flex flex-col items-center py-7'>
                <div className='block'>
                    <h2 className='text-2xl mb-4'>{loginForm ? "Login" : "Sign Up"}</h2>
                </div>
                <div className='mt-4'>
                    <form onSubmit={loginForm ? handleLogin : handleSignUp} className='flex flex-col items-center gap-10' >
                        <div className='gap-3 grid grid-cols-3 mx-8'>
                            {
                                !loginForm && <>
                                    <label
                                        className='mx-2 text-lg'
                                        htmlFor='email'
                                    >
                                        First Name
                                    </label>
                                    <input
                                        id='fname'
                                        type='text'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        placeholder='Enter your First Name'
                                        className='px-2 col-span-2 py-2 bg-gray-800 border border-neutral-400 rounded-md p-1'
                                    />
                                    <label
                                        className='mx-2 text-lg'
                                        htmlFor='lname'
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        id='lname'
                                        type='text'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        placeholder='Enter your Last Name'
                                        className='px-2 col-span-2 py-2 bg-gray-800 border border-neutral-400 rounded-md p-1'
                                    />
                                </>
                            }
                            <label
                                className='mx-2 text-lg'
                                htmlFor='email'
                            >
                                Email
                            </label>
                            <input
                                id='email'
                                type='email'
                                value={emailId}
                                onChange={(e) => setEmailId(e.target.value)}
                                placeholder='Enter your email'
                                className='px-2 col-span-2 py-2 bg-gray-800 border border-neutral-400 rounded-md p-1'
                            />
                            <label
                                className='mx-2 text-lg'
                                htmlFor='password'
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter password'
                                className=' px-2 pt-2 col-span-2 bg-gray-800 border border-neutral-400 rounded-md p-1'
                            />
                            {error && <div className='text-red-500 col-span-2 my-2'>{error}</div>}
                        </div>
                        <button type='submit' className='bg-sky-700 rounded-lg py-2 text-md w-1/5'>{loginForm ? "Login" : "Sign Up"}</button>
                    </form>
                    <div className='flex justify-center pt-8 cursor-pointer'>
                        {loginForm && <span onClick={() => setLoginForm((v) => !v)} className='px-10'>New user? Sign Up</span>}
                        {!loginForm && <span onClick={() => setLoginForm((v) => !v)} className='px-10'>Already a user? Sign In</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
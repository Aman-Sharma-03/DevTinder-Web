import React, { useState } from 'react'
import axios from "axios";
import { useDispatch } from "react-redux"
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { API_HOST } from './../utils/constants';

const Login = () => {
    const navigate = useNavigate();
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
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
    return (
        <div className='flex justify-center text-white'>
            <div className='bg-gray-900 rounded-xl w-1/3 mt-10 flex flex-col items-center py-7'>
                <div className='block'>
                    <h2 className='text-2xl mb-4'>Login</h2>
                </div>
                <div className='mt-4'>
                    <form onSubmit={handleLogin} className='flex flex-col items-center gap-10' >
                        <div className='gap-3 grid grid-cols-3 mx-16'>
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
                        <button type='submit' className='bg-sky-700 rounded-lg py-2 text-md w-1/5'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
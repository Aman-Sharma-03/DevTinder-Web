import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { API_HOST } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import axios from 'axios'

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store) => store.user);

    const fetchUser = async () => {
        if (userData) return;
        try {
            const res = await axios(`${API_HOST}/profile/view`, { withCredentials: true });
            dispatch(addUser(res.data));
        } catch (err) {
            if (err.status === 401)
                navigate('/login');
            console.error(err);
        }
    }
    useEffect(() => {
        if (!userData)
            fetchUser();
    }, []);
    return (
        <div>
            <NavBar />
            <div className='bg-gray-700 h-screen'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Body
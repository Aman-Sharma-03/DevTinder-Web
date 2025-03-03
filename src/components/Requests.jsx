import axios from 'axios';
import React, { useEffect } from 'react'
import { API_HOST } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest } from '../utils/requestSlice';

const Requests = () => {
    const dispatch = useDispatch();
    const requests = useSelector((store) => store.request);
    const fetchRequests = async () => {
        try {
            if (requests) return;
            const res = await axios.get(`${API_HOST}/user/requests/received`, { withCredentials: true });
            dispatch(addRequest(res.data.data));
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchRequests();
    }, []);
    if (!requests) {
        return;
    }
    if (requests.length === 0) {
        return <h1>No requests Received</h1>
    }
    return (
        <div className='py-10 text-white'>
            <h1 className='flex justify-center text-bold text-3xl my-5'>Connection Requests</h1>
            <div className='flex flex-col items-center'>
                {
                    requests.map((request, index) => {
                        const { firstName, lastName, photoUrl, age, about, gender } = request.fromUserId;
                        return (
                            <div key={index} className='flex gap-5 m-4 p-4 border bg-gray-800 rounded-lg w-1/2'>
                                <div>
                                    <img src={photoUrl} alt="photo" className='w-24 rounded-full' />
                                </div>
                                <div className='mt-2'>
                                    <h2 className='font-bold text-lg'>{firstName + " " + lastName}</h2>
                                    {age && gender && <p>{age + ", " + gender}</p>}
                                    <p>{about}</p>
                                </div>
                                <div className='flex flex-col gap-4 justify-center ml-auto mr-4'>
                                    <button className='bg-green-600 hover:bg-green-500 p-2 rounded-lg'>Accept</button>
                                    <button className='bg-red-600 hover:bg-red-500 p-2 rounded-lg'>Reject</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Requests
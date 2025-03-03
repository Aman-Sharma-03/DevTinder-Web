import axios from 'axios';
import React, { useEffect } from 'react'
import { API_HOST } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionsSlice';

const Connections = () => {
    const connections = useSelector((store) => store.connections);
    const dispatch = useDispatch();
    const fetchConnections = async () => {
        try {
            if (connections) return;
            const res = await axios.get(`${API_HOST}/user/connections`, { withCredentials: true });
            console.log(res.data.data);
            dispatch(addConnections(res.data.data));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchConnections();
    }, [])
    if (!connections) {
        return;
    }
    if (connections.length === 0) {
        return <h1>No Connections Found</h1>
    }
    return (
        <div className='py-10 text-white'>
            <h1 className='flex justify-center text-bold text-3xl my-5'>Connections</h1>
            <div className='flex flex-col items-center'>
                {
                    connections.map((connection, index) => {
                        const { firstName, lastName, photoUrl, age, about, gender } = connection;
                        return (
                            <div key={index} className='flex gap-5 m-4 p-4 border bg-gray-800 rounded-lg w-1/2'>
                                <div>
                                    <img src={connection.photoUrl} alt="photo" className='w-24 rounded-full' />
                                </div>
                                <div className='mt-2'>
                                    <h2 className='font-bold text-lg'>{firstName + " " + lastName}</h2>
                                    {age && gender && <p>{age + ", " + gender}</p>}
                                    <p>{about}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Connections
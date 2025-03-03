import React from 'react'
import { API_HOST } from './../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';
import axios from 'axios';

const UserCard = ({ user, className, profile }) => {
    if (!user) {
        return null;
    }
    const { firstName, lastName, photoUrl, age, gender, about } = user;

    const dispatch = useDispatch();

    const handleSendRequest = async (status, userId) => {
        try {
            const res = await axios.post(`${API_HOST}/request/send/${status}/${userId}`, {}, { withCredentials: true });
            dispatch(removeUserFromFeed(userId));
            console.log("removed")
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <div className={`${className} bg-gray-800 text-white w-72`}>
            <div className='flex justify-center'>
                <img src={`${photoUrl}`} alt="User PP" className=' w-72' />
            </div>
            <div className='px-3 pt-2'>
                <h2>{firstName} {lastName}</h2>
                {age && gender && <p className='py-1'>{age + ", " + gender}</p>}
                <p className='py-1'>{about}</p>

                {
                    profile && <div className='flex justify-center gap-5 my-3 mb-6'>
                        <button
                            onClick={() => handleSendRequest('ignored', user._id)}
                            className='flex flex-col font-semibold bg-fuchsia-500 hover:bg-fuchsia-400 rounded-lg px-3 py-2'
                        >
                            {/* <span>❌</span> */}
                            <span>Ignore</span>
                        </button>
                        <button
                            onClick={() => handleSendRequest('interested', user._id)}
                            className='flex flex-col font-semibold bg-green-500 hover:bg-green-400 rounded-lg px-3 py-2'
                        >
                            {/* <span>✅</span> */}
                            <span>Interested</span>
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default UserCard
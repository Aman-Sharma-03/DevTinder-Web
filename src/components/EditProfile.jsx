import React, { useState } from 'react'
import UserCard from './UserCard';
import axios from 'axios';
import { API_HOST } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const EditProfile = ({ user, toast }) => {
    if (!user) {
        return (
            <h1>Please Login</h1>
        )
    }

    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [gender, setGender] = useState(user.gender);
    const [about, setAbout] = useState(user.about);
    const [error, setError] = useState("");
    const saveProfile = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const res = await axios.patch(`${API_HOST}/profile/edit`, { firstName, lastName, photoUrl, age, gender, about }, { withCredentials: true });
            dispatch(addUser(res?.data?.data));
            toast.success("Profile Saved")
        } catch (err) {
            setError(err.response.data);
        }
    }

    return user && (
        <div className='flex justify-center'>
            <div className='flex justify-center mx-5 text-white'>
                <div className='bg-gray-900 rounded-xl mt-10 flex flex-col items-center py-7'>
                    <div className='block'>
                        <h2 className='text-2xl mb-4'>Edit Profile</h2>
                    </div>
                    <div className='mt-4'>
                        <form onSubmit={saveProfile} className='flex flex-col items-center gap-10' >
                            <div className='gap-3 grid grid-cols-3 mx-16'>
                                <label
                                    className='mx-2 text-lg'
                                    htmlFor='fname'
                                >
                                    First Name
                                </label>
                                <input
                                    id='fname'
                                    type='text'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder=''
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
                                    placeholder=''
                                    className='px-2 col-span-2 py-2 bg-gray-800 border border-neutral-400 rounded-md p-1'
                                />
                                <label
                                    className='mx-2 text-lg'
                                    htmlFor='age'
                                >
                                    Age
                                </label>
                                <input
                                    id='age'
                                    type='number'
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    placeholder=''
                                    className='px-2 col-span-2 py-2 bg-gray-800 border border-neutral-400 rounded-md p-1'
                                />
                                <label
                                    className='mx-2 text-lg'
                                    htmlFor='gender'
                                >
                                    Gender
                                </label>
                                <input
                                    id='gender'
                                    type='text'
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    placeholder=''
                                    className='px-2 col-span-2 py-2 bg-gray-800 border border-neutral-400 rounded-md p-1'
                                />
                                <label
                                    className='mx-2 text-lg'
                                    htmlFor='about'
                                >
                                    About
                                </label>
                                <input
                                    id='about'
                                    type='text'
                                    value={about}
                                    onChange={(e) => setAbout(e.target.value)}
                                    placeholder=''
                                    className='px-2 col-span-2 py-2 bg-gray-800 border border-neutral-400 rounded-md p-1'
                                />
                                <label
                                    className='mx-2 text-lg'
                                    htmlFor='photo'
                                >
                                    PhotoURL
                                </label>
                                <input
                                    id='photo'
                                    type='url'
                                    value={photoUrl}
                                    onChange={(e) => setPhotoUrl(e.target.value)}
                                    placeholder=''
                                    className='px-2 col-span-2 py-2 bg-gray-800 border border-neutral-400 rounded-md p-1'
                                />
                            </div>
                            {error && <p className="text-red-500">{error}</p>}
                            <button type='submit' className='bg-sky-700 rounded-lg py-2 text-md w-1/5'>Save Profile</button>
                        </form>
                    </div>
                </div>
            </div>
            <UserCard className="mt-10 mx-5 rounded-lg" user={{ firstName, lastName, age, about, gender, photoUrl }} />
        </div >
    )
}

export default EditProfile
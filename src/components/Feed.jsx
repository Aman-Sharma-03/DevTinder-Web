import axios from 'axios'
import React, { useEffect } from 'react'
import { API_HOST } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {
    const feed = useSelector((store) => store.feed);
    const dispatch = useDispatch();

    useEffect(() => {
        getFeed();
    }, []);

    const getFeed = async () => {
        try {
            const response = await axios(`${API_HOST}/user/feed`, { withCredentials: true });
            dispatch(addFeed(response.data.data));
        } catch (err) {
            console.log(err);
        }
    }

    if (feed && feed.length === 0) {
        return (
            <div className='flex justify-center py-10 text-white text-xl'>No user found</div>
        )
    }

    return feed && feed.length !== 0 && (
        <div className='flex justify-center py-10'>
            <UserCard profile={true} user={feed[0]} />
        </div>
    )
}

export default Feed
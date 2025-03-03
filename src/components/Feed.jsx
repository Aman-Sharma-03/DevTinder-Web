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
        if (feed) return;
        try {
            const response = await axios(`${API_HOST}/user/feed`, { withCredentials: true });
            dispatch(addFeed(response.data));
        } catch (err) {
            console.log(err);
        }
    }

    return feed && (
        <div className='flex justify-center py-10'>
            <UserCard user={feed.data[0]} />
        </div>
    )
}

export default Feed
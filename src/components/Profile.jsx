import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from "react-toastify";

const Profile = () => {
    const user = useSelector(store => store.user);
    return (
        <div>
            <EditProfile user={user} toast={toast} />
            <ToastContainer />
        </div>
    )
}

export default Profile
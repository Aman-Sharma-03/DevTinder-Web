import React from 'react'

const UserCard = ({ user, className }) => {
    const { firstName, lastName, photoUrl, age, gender, about } = user;

    const handleIgnore = async () => {

    }

    const handleInterested = async () => {

    }

    return (
        <div className={`${className} bg-gray-800 text-white w-84`}>
            <div className='flex justify-center'>
                <img src={`${user.photoUrl}`} alt="User PP" className='py-6 w-72' />
            </div>
            <div className='px-6'>
                <h2>{firstName} {lastName}</h2>
                {age && gender && <p className='py-1'>{age + ", " + gender}</p>}
                <p className='py-1'>{about}</p>
                <div className='flex justify-center gap-5 my-3 mb-6'>
                    <button
                        onClick={handleIgnore}
                        className='flex flex-col bg-fuchsia-500 rounded-lg px-3 py-1'
                    >
                        <span>❌</span>
                        <span>Ignore</span>
                    </button>
                    <button
                        onClick={handleInterested}
                        className='flex flex-col bg-green-500 rounded-lg px-3 py-1'
                    >
                        <span>✅</span>
                        <span>Interested</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserCard
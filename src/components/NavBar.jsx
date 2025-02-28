import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const [drop, setDrop] = useState(false);
  return (
    <div className="navbar bg-gray-900 text-white flex justify-center items-center h-16 px-10">
      <div className="flex-1">
        <Link to="/profile" className='bg-gray-800 rounded-lg p-2 px-3 hover:bg-gray-900 text-xl'>DevTinder</Link>
      </div>
      <div className='relative' onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
        {
          user && (
            <div className='flex items-center gap-3'>
              <div>
                Welcome {user.firstName}
              </div>
              <div className='w-9 bg-gray-800 hover:bg-gray-900 rounded-full'>
                <img src={`${user.photoUrl}`} className='rounded-full w-9' />
              </div>
            </div>
          )
        }

        {
          drop && (
            <div className="absolute bg-gray-800 rounded-xl top-9 right-2">
              <ul className='m-2'>
                <li className='p-2 hover:bg-gray-600 hover:rounded-lg'>
                  <Link to='/profile'>Profile</Link>
                </li>
                <li className='p-2 hover:bg-gray-600 hover:rounded-lg'>Settings</li>
                <li className='p-2 hover:bg-gray-600 hover:rounded-lg'>Logout</li>
              </ul>
            </div>
          )
        }
      </div>
    </div >
  )
}

export default NavBar
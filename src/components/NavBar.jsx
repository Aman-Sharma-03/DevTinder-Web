import React, { useState } from 'react'

const NavBar = () => {
  const [drop, setDrop] = useState(false);
  return (
    <navbar className="navbar bg-gray-900 text-white flex justify-center items-center h-16 px-10">
      <div className="flex-1">
        <a className='bg-gray-700 text-xl'>DevTinder</a>
      </div>
      <div className='relative' onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
        <div className='w-10 rounded-full'>
          <img src="" alt="avatar" />
        </div>
        {
          drop && (
            <div className="absolute bg-gray-800 rounded-lg top-10 right-2">
              <ul>
                <li className='p-2 hover:bg-gray-600'>
                  <a href='#'>Profile</a>
                </li>
                <li className='p-2 hover:bg-gray-600'>Settings</li>
                <li className='p-2 hover:bg-gray-600'>Logout</li>
              </ul>
            </div>
          )
        }
      </div>
    </navbar >
  )
}

export default NavBar
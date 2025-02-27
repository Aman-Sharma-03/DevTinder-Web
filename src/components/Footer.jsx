import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";


const Footer = () => {
    return (
        <footer className='px-10 py-5 mt-1 bg-gray-900 text-white fixed bottom-0 right-0 left-0'>
            <div className='flex justify-between'>
                <div>#️⃣ Copyright @ 2025 - Created by Jai</div>
                <div className='flex gap-5'>
                    <Link to="">
                        <IoLogoGithub size={24} />
                    </Link>
                    <Link to="">
                        <FaInstagram size={24} />
                    </Link>
                    <Link to="">
                        <RiTwitterXFill size={24} />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
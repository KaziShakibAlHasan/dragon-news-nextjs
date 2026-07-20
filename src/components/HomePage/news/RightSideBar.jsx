import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
            <h2 className='font-bold text-lg mb-4'>Login With</h2>
            <button className='flex items-center btn gap-2 border-blue-600 text-blue-500'><FaGoogle />Login With Google</button>
            <button className=' mt-2 flex btn items-center border-red-600 text-red-500 gap-2'><FaGithub />Login With github</button>
        </div>
    );
};

export default RightSideBar;
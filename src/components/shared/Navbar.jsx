'use client'
import Image from 'next/image';
import React, { use } from 'react';
import userAvatar from '@/assets/user.png'
import Link from 'next/link';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
const Navbar = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user;


    return (
        <div className=' w-11/12 mx-auto flex justify-between mt-6'>
            <div></div>
            <ul className='flex justify-between items-center gap-2 text-gray-700'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about-us'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>

            </ul>
            {user ?
                <div className='flex items-center gap-2'>
                    <h2>{user.name}</h2>
                    {/* <Image src={userAvatar} width={60} height={60} alt='User Avatar'></Image> */}
                    <Image src={userAvatar} width={60} height={60} alt='User Avatar'></Image>
                    <button onClick={async () => await authClient.signOut()
                    } className='btn bg-red-500 text-white'>
                        Logout
                    </button>
                </div>
                :
                <button className='btn bg-black text-white'>
                    <Link href={'/login'}>Login</Link>
                </button>
            }
        </div >
    );
};

export default Navbar;
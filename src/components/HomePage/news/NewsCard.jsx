import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoShareSocial, IoStar } from 'react-icons/io5';

const NewsCard = ({ n }) => {
    console.log(n)
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm mx-auto">

                <div className='p-3'>
                    <div className="justify-between flex ">

                        <div>
                            <div className='flex justify-center items-center gap-2 m-3'>
                                <Image className='rounded-full' src={n.author?.img} alt={n.author?.name} height={40} width={40}></Image>
                                <div>
                                    <h2 className=''>{n.author?.name}</h2>
                                    <p className='text-xs'>{n.author?.published_date
                                    }</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center gap-2 items-center'>
                            <IoShareSocial className='text-2xl' />
                            <CiBookmark  className='text-2xl'/>
                        </div>
                    </div>
                    <h2 >{n.title}</h2>
                    <figure>
                        <Image src={n.image_url} alt={n.title} width={300} height={300} className='w-full rounded-2xl'/>
                    </figure>
                    <p className='line-clamp-2'>{n.details}</p>

                    <div className='flex justify-between items-center mt-3'>
                        <div className='flex items-center gap-2'>
                            <h2 className='flex items-center gap-2'><IoStar className='text-yellow-500' />{n.rating.number}</h2>
                            <h2 className='flex items-center gap-2'><FaEye  className='flex items-center gap-2'/>{n.total_view}</h2>
                        </div>
                        <div>
                            <Link href={`/news/${n._id}`}>
                            <button className='btn'>See details</button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
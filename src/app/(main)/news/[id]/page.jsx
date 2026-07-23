import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoShareSocial, IoStar } from 'react-icons/io5';

export async function generateMetadata({params}) {
    const {id} = await params;
    const news = await getNewsDetailsById(id);
    return {
    title: news.title,
    description: news.details,
  }
}


const NewsDetailsPage = async ({params}) => {
    const {id} = await params;
    const n = await getNewsDetailsById(id);
    return (
        <div className='max-w-4xl mx-auto py-7'>
       <div className="card bg-base-100 w-full shadow-sm mx-auto">

                <div className='p-3'>
                    <div className="justify-between flex ">

                        <div>
                            <div className='flex justify-center items-center gap-2 m-3'>
                                <Image className='rounded-xl' src={n.author?.img} alt={n.author?.name} height={40} width={40}></Image>
                                <div>
                                    <h2 className=''>{n.author?.name}</h2>
                                    <p className='text-xs'>{n.author?.published_date
                                    }</p>

                                    
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center gap-2 items-center'>
                            <div className='flex items-center gap-2'>
                            <h2 className='flex items-center gap-2'><IoStar className='text-yellow-500' />{n.rating.number}</h2>
                            <h2 className='flex items-center gap-2'><FaEye  className='flex items-center gap-2'/>{n.total_view}</h2>
                        </div>
                        </div>
                    </div>
                    
                    <figure>
                        <Image src={n.image_url} alt={n.title} width={300} height={300} className='w-full rounded-2xl'/>
                    </figure>
                    <h2 className='font-bold my-4'>{n.title}</h2>
                    <p className=''>{n.details}</p>

                    <div className='flex justify-between items-center mt-3'>
                        
                        <div className='text-center '>
                            <Link href={`/category/${n.category_id}`}>
                            <button className='btn bg-pink-500 text-white mt-4 ml-80'>See Other News For this Category <FaArrowRightLong /></button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;
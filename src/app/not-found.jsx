import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-[80vh] flex space-y-8 justify-center items-center flex-col'>
            <h2 className='font-bold text-5xl text-purple-500'>This page is not found</h2>
            <Link href={'/'}>
            <button className='btn btn-primary'>Back to Home</button></Link>
        </div>
    );
};

export default NotFoundPage;
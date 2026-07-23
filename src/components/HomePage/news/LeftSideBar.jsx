import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({categories, activeId}) => {
    return (
        <div>
            <div >
                <div className="font-bold text-lg ">
                   All catehoris
                </div>
                <ul className="flex flex-col gap-3 mt-4 ">
                    {
                        categories.news_category.map(category => <li key={category.category_id} className={`
                            ${activeId == category.category_id && 'bg-slate-300' }
                             p-2 rounded-md font-bold text-md mt-1 ` }><Link className='block' href={`/category/${category.category_id}`}>{category.category_name}</Link></li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default LeftSideBar;
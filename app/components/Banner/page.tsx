import Image from 'next/image';
import React from 'react';
import bannerImg from "@/app/assests/pngwing 1.png"

const BannerPage = () => {
    return (
        <div className='container mx-auto flex justify-between items-center bg-gray-300 my-20 rounded-2xl p-20 min-h-1/2'>
            <div>
                <h1 className='text-6xl font-bold mb-10'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn bg-[#23BE0A] text-white font-semibold rounded-xl text-xl px-10 py-6'>View The List</button>
            </div>
            <div>
                <Image className='rounded-2xl' src={bannerImg} alt="Banner Image" />
            </div>
        </div>
    );
};

export default BannerPage;
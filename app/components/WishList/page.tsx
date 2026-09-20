import React from 'react';
import { FaHeart } from 'react-icons/fa';

const WishListBtn = () => {
    return (
        <div>
           <button className="flex items-center gap-2 rounded-xl bg-[#4db3ce] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#319bb8]">
                  <FaHeart />
                  Wishlist
                </button>  
        </div>
    );
};

export default WishListBtn;
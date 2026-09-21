"use client";
import { booksContext } from '@/app/context/BooksProvider';
import { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';

const WishListBtn = ({book}) => {
    const {wishlist,setWishlist}=useContext(booksContext)
    console.log(book)

    const handleWishlistBtn=()=>{
        console.log("handle wishlist button clicked")
        setWishlist([...wishlist,book])
        toast.success(`${book.bookName} has been added to your wishlist!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <div>
           <button onClick={()=>handleWishlistBtn()} className="flex items-center gap-2 rounded-xl bg-[#4db3ce] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#319bb8]">
                  <FaHeart />
                  Wishlist
                </button>  
        </div>
    );
};

export default WishListBtn;
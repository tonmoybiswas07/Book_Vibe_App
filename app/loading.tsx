

const Loading = () => {
    return (
        <div>
          
    <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
      <div className="flex flex-col items-center">

        {/* Book Loader */}
        <div className="relative h-20 w-20">
          <div className="absolute left-1/2 top-1/2 h-14 w-11 -translate-x-[95%] -translate-y-1/2 origin-right animate-[bookLeft_1.2s_ease-in-out_infinite] rounded-l-md bg-[#4db3ce] shadow-md" />

          <div className="absolute left-1/2 top-1/2 h-14 w-11 -translate-y-1/2 origin-left animate-[bookRight_1.2s_ease-in-out_infinite] rounded-r-md bg-[#319bb8] shadow-md" />

          {/* Book Line */}
          <div className="absolute left-1/2 top-1/2 h-12 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-white" />
        </div>

        {/* Brand */}
        <h2 className="mt-3 text-2xl font-bold tracking-wide text-gray-800">
          Book <span className="text-[#319bb8]">Vibe</span>
        </h2>

        {/* Loading dots */}
        <div className="mt-2 flex gap-1.5">
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#319bb8]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#319bb8] [animation-delay:150ms]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#319bb8] [animation-delay:300ms]" />
        </div>

      </div>
    </div>
 


        </div>
    );
};

export default Loading;
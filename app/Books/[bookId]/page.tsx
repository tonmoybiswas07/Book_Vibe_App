import { IBook } from "@/app/types";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { notFound } from "next/navigation";
import ReadBooksBtn from "@/app/components/ReadBooks/page";
import WishListBtn from "@/app/components/WishList/page";

const PromiseData = async (): Promise<IBook[]> => {
  try {
     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);

  if (!res.ok) {
    throw new Error("Failed to fetch books data");
  }

  const data: IBook[] = await res.json();

  return data;
  } catch (error) {
    console.error("Error faching book data",error)
    return []
    
  }
 
};

interface BookDetailPageProps {
  params: Promise<{
    bookId: string;
  }>;
}

const BookDetailPage = async ({ params }: BookDetailPageProps) => {
  const { bookId } = await params;

  const data = await PromiseData();

  const book = data.find((item) => item.bookId === Number(bookId));

  
  if (!book) {
    notFound();
  }

  const {
    image,
    bookName,
    author,
    category,
    rating,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div>
      <section className="min-h-screen bg-[#fafafa] px-4 py-10 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Main Card */}
          <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm lg:grid-cols-2">
            {/* ================= IMAGE ================= */}
            <div className="flex min-h-[500px] items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-white p-8 md:p-12">
              <div className="relative flex h-[430px] w-full items-center justify-center rounded-2xl bg-[#f3f3f3]">
                {/* Decorative circle */}
                <div className="absolute h-72 w-72 rounded-full bg-white/70 blur-2xl" />

                {/* Book Image */}
                <Image
                  src={image}
                  alt={bookName}
                  width={600}
                  height={800}
                  priority
                  className="relative z-10 h-[380px] w-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                />

                {/* Rating */}
                <div className="absolute right-5 top-5 z-20 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
                  <FaStar className="text-yellow-400" />

                  <span className="font-semibold text-gray-800">
                    {rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="flex flex-col p-7 md:p-10 lg:p-12">
              {/* Category */}
              <div className="mb-4">
                <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-600">
                  {category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                {bookName}
              </h1>

              {/* Author */}
              <p className="mt-3 text-base text-gray-500">
                By <span className="font-semibold text-gray-800">{author}</span>
              </p>

              {/* Divider */}
              <div className="my-6 border-t border-gray-200" />

              {/* Review */}
              <div>
                <h3 className="mb-2 text-base font-bold text-gray-900">
                  Review
                </h3>

                <p className="text-sm leading-7 text-gray-500">{review}</p>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-sm font-bold text-gray-800">Tags</span>

                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-gray-200" />

              {/* Book Information */}
              <div className="space-y-4">
                {/* Pages */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Number of Pages</span>

                  <span className="text-sm font-semibold text-gray-900">
                    {totalPages}
                  </span>
                </div>

                {/* Publisher */}
                <div className="flex items-center justify-between gap-5">
                  <span className="text-sm text-gray-500">Publisher</span>

                  <span className="text-right text-sm font-semibold text-gray-900">
                    {publisher}
                  </span>
                </div>

                {/* Year */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Year of Publishing
                  </span>

                  <span className="text-sm font-semibold text-gray-900">
                    {yearOfPublishing}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Rating</span>

                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />

                    <span className="text-sm font-semibold text-gray-900">
                      {rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                {/* Read */}
                <ReadBooksBtn book={book} />

                {/* Wishlist */}
               <WishListBtn book={book}></WishListBtn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDetailPage;

import { books } from "@/app/catalog";
import BookActions from "@/app/components/BookActions";
import BookCover from "@/app/components/BookCover";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiStar } from "react-icons/fi";

export const dynamicParams = false;

export function generateStaticParams() {
  return books.map((book) => ({ bookId: String(book.bookId) }));
}

export default async function BookDetail({ params }: PageProps<"/Books/[bookId]">) {
  const { bookId } = await params;
  const book = books.find((item) => String(item.bookId) === bookId);
  if (!book) notFound();

  return (
    <section className="shell detail">
      <Link className="back-link" href="/Books"><FiArrowLeft /> Back to the catalog</Link>
      <div className="detail-layout">
        <div className="cover-stage detail-stage" data-tone={(book.bookId - 1) % 4}>
          <BookCover book={book} width={320} height={480} preload />
        </div>
        <div className="detail-copy">
          <span className="eyebrow">{book.category}</span>
          <h1>{book.bookName}</h1>
          <p className="author">By {book.author}</p>
          <div className="detail-tags"><span className="rating"><FiStar /> {book.rating.toFixed(1)}</span>{book.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
          <dl className="book-facts">
            <div><dt>Pages</dt><dd>{book.totalPages}</dd></div>
            <div><dt>Published</dt><dd>{book.yearOfPublishing}</dd></div>
            <div><dt>Publisher</dt><dd>{book.publisher}</dd></div>
          </dl>
          <BookActions id={book.bookId} />
          <div className="book-review"><h2>About the book</h2><p>{book.review}</p></div>
        </div>
      </div>
    </section>
  );
}

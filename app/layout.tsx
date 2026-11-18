import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Shared/Navbar/Navbar";
import BooksProvider from "./context/BooksProvider";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: { default: "Book Vibe — Find your next good read", template: "%s | Book Vibe" },
  description: "Explore the Book Vibe catalog, build your bookshelf, and track your reading.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <BooksProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </BooksProvider>
      </body>
    </html>
  );
}

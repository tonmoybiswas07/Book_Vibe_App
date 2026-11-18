# Book Vibe

Book Vibe is a reading tracker for discovering books, building a wishlist, and keeping track of what you’ve read.

## Features

- Search the catalog by title, author, genre, or tag. Filter by genre and sort by rating, page count, or publication year.
- Open a book to see its cover, review, rating, and publication details.
- Save books to your wishlist, mark them as read, or remove them from your shelf.
- Track books read, total pages, and genres explored, with a chart of pages per book.

The catalog ships with the app as [a JSON file](public/booksData.json). Your shelf is saved in your browser’s local storage and is specific to that browser.

## Getting started

You’ll need Node.js 20.9 or later and npm. No environment variables are required.

From the project directory, run:

```sh
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run lint` | Check the project with ESLint. |
| `npm run build` | Create a production build. |
| `npm start` | Serve the production build after it has been created. |

## Project structure

The app uses the Next.js App Router, React, TypeScript, Tailwind CSS, and Recharts.

| Route | Source | Page |
| --- | --- | --- |
| `/` | [app/page.tsx](app/page.tsx) | Home banner and catalog |
| `/Books` | [app/Books/page.tsx](app/Books/page.tsx) | Catalog |
| `/Books/[bookId]` | [Book detail page](app/Books/%5BbookId%5D/page.tsx) | Book details and shelf actions |
| `/ListesBooks` | [Shelf page](app/ListesBooks/page.tsx) | Read list and wishlist |
| `/readBooks` | [Reading stats page](app/readBooks/page.tsx) | Reading totals and chart |

The [root layout](app/layout.tsx) renders the shared navigation and footer. [BooksProvider](app/context/BooksProvider.tsx) manages shelf state, and [globals.css](app/globals.css) contains the shared styles.

import data from "@/public/booksData.json";
import type { IBook } from "./types";

export const books: IBook[] = data;
export type SortOrder = "catalog" | "rating" | "pages" | "year";

export function sortBooks(items: IBook[], order: SortOrder) {
  const field = { rating: "rating", pages: "totalPages", year: "yearOfPublishing" } as const;
  return order === "catalog" ? items : [...items].sort((a, b) => b[field[order]] - a[field[order]]);
}

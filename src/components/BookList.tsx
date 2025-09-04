"use client";
import { useBooks } from "@/hooks/useBooks";

import BookCard from "../components/BookCard";

export default function BookListComponent() {
  const { books, isLoading } = useBooks();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!books || books.length === 0) {
    return <div>No books found.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {books.map((b) => (
        <BookCard key={b.slug} book={b} />
      ))}
    </div>
  );
}

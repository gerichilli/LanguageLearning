"use client";
import { useEffect, useState } from "react";

import { BookList } from "@/lib/types/book";

import BookCard from "../components/BookCard";

export default function BookListComponent() {
  const [books, setBooks] = useState<BookList | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/book-list", {
        cache: "no-store",
        next: { revalidate: 120 },
      });
      const data: { books: BookList } = await res.json();
      setBooks(data.books);
    };
    fetchData();
  }, []);

  if (!books) {
    return <div>Loading...</div>;
  }

  if (books.length === 0) {
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

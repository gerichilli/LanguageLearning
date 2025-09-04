"use client";
import { useEffect, useState } from "react";

import { BookList } from "@/lib/types/book";

export function useBooks() {
  const [books, setBooks] = useState<BookList | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch("/api/book-list", {
        cache: "no-store",
      });
      const data: { books: BookList } = await res.json();
      setBooks(data.books);
      setLoading(false);
    };
    fetchData();
  }, []);

  return { books, isLoading };
}

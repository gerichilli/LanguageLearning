"use client";
import { useEffect, useState } from "react";

import { BookDetail } from "@/lib/types/book";

export function useBookDetail(slug?: string) {
  const [book, setBook] = useState<BookDetail | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(`/api/book-detail/${slug}`, {
        cache: "no-store",
      });
      const data: BookDetail = await res.json();
      setBook(data);
      setLoading(false);
    };
    fetchData();
  }, [slug]);

  return { book, isLoading };
}

"use client";
import { useEffect, useState } from "react";

import { BookDetail } from "@/lib/types/book";

export function useBookDetail(slug?: string) {
  const [book, setBook] = useState<BookDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    (async () => {
      try {
        const res = await fetch(`/api/book-detail/${slug}`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: BookDetail = await res.json();
        setBook(data);
        setError(null);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

  return { book, error, loading };
}

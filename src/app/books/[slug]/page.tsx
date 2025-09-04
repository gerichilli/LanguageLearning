"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import WordListComponent from "@/components/WordList";
import { BookDetail } from "@/lib/types/book";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const [book, setBook] = useState<BookDetail | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/book-detail/${slug}`, {
        cache: "no-store",
        next: { revalidate: 120 },
      });
      const data: BookDetail = await res.json();
      setBook(data);
    };
    fetchData();
  }, [slug]);

  if (!book) {
    return <div>Loading...</div>;
  }

  if (!book.title) {
    return <div>Book not found.</div>;
  }

  return (
    <div className="container max-w-3xl mx-auto pt-8 md:pt-16 pb-12">
      <div className="flex items-center justify-between gap-4 mb-8 md:mb-12">
        <div className="max-w-32 shadow h-fit">
          <Image src={book.coverImage} alt={book.title} width={256} height={400} />
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-medium text-right mb-8 font-decoration leading-normal" style={{color: book.colorSchema?.secondary}}>{book.title}</h1>
          <div id="total-words" className="text-sm text-gray-600 text-right mb-6 font-decoration">
            Total Words: {book.words.length}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <WordListComponent words={book.words} />
      </div>
    </div>
  );
}

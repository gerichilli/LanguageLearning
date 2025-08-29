
import Image from 'next/image';

import WordListComponent from '@/components/WordList';
import { BookDetail } from '@/lib/types/book';

export default async function Page({ params }: { params: { slug: string } }) {

  const { slug } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/${slug}.json`, {
    next: { revalidate: 120 },
  });
  const book: BookDetail = await res.json();

  return (
    <div className="container max-w-3xl mx-auto pt-8 md:pt-16 pb-12">
      <div className="flex items-center justify-between gap-4 mb-8 md:mb-12">
        <div className="max-w-32 shadow h-fit">
          <Image src={book.coverImage} alt={book.title} width={256} height={400} />
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-medium text-right mb-8 font-decoration leading-normal">
            {book.title}
          </h1>
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

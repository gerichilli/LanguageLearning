
import { BookList } from '@/lib/types/book';

import BookCard from '../components/BookCard';

export default async function BookListComponent() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/book-list.json`, {
    next: { revalidate: 120 },
  });
  const data: {books: BookList} = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.books.map((b) => (
        <BookCard key={b.slug} book={b} />
      ))}
    </div>
  );
}

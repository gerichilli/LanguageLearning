import Image from 'next/image';
import Link from 'next/link';

import { CEFR_COLORS } from '@/lib/constants/colors';
import { BookListItem } from '@/lib/types/book';
import Badge from '@/ui/Badge';

const BookCard = ({ book }: { book: BookListItem }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex gap-4">
      {/* Book cover */}
      <div className="max-w-32 shadow h-fit">
        <Image src={book.coverImage} alt={book.title} width={256} height={400} />
      </div>
      <div className="font-title">
        {/* Book level */}
        <p className="text-sm text-gray-600">
          <Badge className={CEFR_COLORS[book.level]}>CEFR Level {book.level}</Badge>
        </p>

        {/* Book title */}
        <h2 className="text-xl font-bold mt-2">{book.title}</h2>

        {/* Book author */}
        <p className="text-sm text-gray-600">
          By <span className="text-[#85a395]">{book.author}</span>
        </p>
        
        {/* Total words */}
        <p className="text-sm text-gray-600">Total {book.wordsCount} words</p>
        
        <Link
          href={`/books/${book.slug}`}
          className="inline-block bg-[#3F6B5C] text-white rounded text-sm font-bold px-3 py-2 mt-4"
        >
          View Details
        </Link>
      </div>
    </div>
  </div>
);

export default BookCard;

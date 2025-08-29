import Link from 'next/link';

export default function Home() {
  return (
    <Link
      href={`/books`}
      className="inline-block bg-[#3F6B5C] text-white rounded text-sm font-bold px-3 py-2 mt-4"
    >
      View all books
    </Link>
  );
}

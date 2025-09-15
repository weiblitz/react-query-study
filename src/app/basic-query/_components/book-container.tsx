'use client';

import type { ReactNode } from 'react';
import { useGetBooks } from '@/api/services/book';
import Book from './book';
import BookError from './book-error';
import BookLoader from './book-loader';

function NoBookMessage() {
  return (
    <div className="text-center text-gray-500">No books found</div>
  );
}
function BookGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}
export default function BookContainer() {
  const {
    data: books,
    isLoading,
    error,
    refetch,
  } = useGetBooks();

  if (isLoading) {
    return <BookLoader />;
  }

  if (error) {
    return <BookError error={error} refetch={refetch} />;
  }

  return (
    books && books.length > 0
      ? (
          <BookGrid>
            {books.map(book => (
              <Book key={book.id} {...book} />
            ))}
          </BookGrid>
        )
      : <NoBookMessage />
  );
}

import { useState } from 'react';
import { Book } from '../../types/book';
import { BookItem } from '../BookItem/BookItem';
import './BookList.css';

interface BookListProps {
  initialBooks?: Book[];
}

const generateBookId = (): string => {
  return `book-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
};

const createNewBook = (): Book => ({
  id: generateBookId(),
  title: `New Book ${new Date().toLocaleDateString()}`,
  description: 'This is a newly added book. You can customize this description.',
  imageUrl: undefined,
});

export const BookList = ({ initialBooks = [] }: BookListProps) => {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const handleAddBook = () => {
    const newBook = createNewBook();
    setBooks((prevBooks) => [newBook, ...prevBooks]);
  };

  return (
    <div className="book-list">
      <div className="book-list__header">
        <h1 className="book-list__title">Book Collection</h1>
        <button
          type="button"
          onClick={handleAddBook}
          className="book-list__add-button"
          aria-label="Add a new book to the collection"
        >
          Add New Book
        </button>
      </div>
      <div className="book-list__content" role="list" aria-label="List of books">
        {books.length === 0 ? (
          <p className="book-list__empty" role="status">
            No books in the collection. Click "Add New Book" to get started.
          </p>
        ) : (
          books.map((book) => (
            <div key={book.id} role="listitem">
              <BookItem book={book} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};


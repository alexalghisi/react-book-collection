import { useState } from 'react';
import { Book } from '../../types/book';
import './BookItem.css';

interface BookItemProps {
  book: Book;
}

const PLACEHOLDER_IMAGE_URL = 'https://via.placeholder.com/200x300?text=No+Image';

export const BookItem = ({ book }: BookItemProps) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleToggleDescription = () => {
    setIsDescriptionVisible((prev) => !prev);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const imageUrl = book.imageUrl && !imageError ? book.imageUrl : PLACEHOLDER_IMAGE_URL;
  const hasDescription = Boolean(book.description);

  return (
    <article className="book-item" aria-labelledby={`book-title-${book.id}`}>
      <div className="book-item__content">
        <div className="book-item__image-container">
          <img
            src={imageUrl}
            alt={book.imageUrl && !imageError ? `${book.title} cover` : 'Book cover placeholder'}
            className="book-item__image"
            onError={handleImageError}
            loading="lazy"
          />
        </div>
        <div className="book-item__details">
          <h2 id={`book-title-${book.id}`} className="book-item__title">
            {book.title}
          </h2>
          {hasDescription && (
            <button
              type="button"
              onClick={handleToggleDescription}
              className="book-item__toggle"
              aria-expanded={isDescriptionVisible}
              aria-controls={`book-description-${book.id}`}
            >
              {isDescriptionVisible ? 'Hide Description' : 'Show Description'}
            </button>
          )}
          {hasDescription && isDescriptionVisible && (
            <p
              id={`book-description-${book.id}`}
              className="book-item__description"
              role="region"
              aria-live="polite"
            >
              {book.description}
            </p>
          )}
        </div>
      </div>
    </article>
  );
};


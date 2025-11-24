import { Book } from '../types/book';

export const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    description:
      'A classic American novel set in the Jazz Age, following Nick Carraway\'s observations of his mysterious neighbor Jay Gatsby and his obsession with Daisy Buchanan.',
    imageUrl: 'https://covers.openlibrary.org/b/id/8231281-M.jpg',
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    description:
      'A gripping tale of racial injustice and childhood innocence in the American South, told through the eyes of Scout Finch.',
    imageUrl: 'https://covers.openlibrary.org/b/id/8231282-M.jpg',
  },
  {
    id: '3',
    title: '1984',
    description:
      'George Orwell\'s dystopian masterpiece about totalitarian surveillance and thought control in a future society.',
    imageUrl: 'https://covers.openlibrary.org/b/id/8231283-M.jpg',
  },
  {
    id: '4',
    title: 'Pride and Prejudice',
    description:
      'Jane Austen\'s timeless romance novel about Elizabeth Bennet and Mr. Darcy, exploring themes of love, class, and social expectations.',
  },
  {
    id: '5',
    title: 'The Catcher in the Rye',
    description:
      'J.D. Salinger\'s controversial coming-of-age story following Holden Caulfield\'s journey through New York City.',
    imageUrl: 'https://invalid-url-that-will-fail.com/image.jpg',
  },
];


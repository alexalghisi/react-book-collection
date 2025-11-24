import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BookItem } from './BookItem';
import { Book } from '../../types/book';

describe('BookItem', () => {
  const mockBook: Book = {
    id: '1',
    title: 'Test Book',
    description: 'This is a test description',
    imageUrl: 'https://example.com/image.jpg',
  };

  it('renders book title prominently', () => {
    render(<BookItem book={mockBook} />);
    const title = screen.getByRole('heading', { level: 2, name: 'Test Book' });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Test Book');
  });

  it('displays description when toggle is clicked', async () => {
    const user = userEvent.setup();
    render(<BookItem book={mockBook} />);

    const toggleButton = screen.getByRole('button', { name: /show description/i });
    expect(toggleButton).toBeInTheDocument();

    const descriptionBefore = screen.queryByText('This is a test description');
    expect(descriptionBefore).not.toBeInTheDocument();

    await user.click(toggleButton);

    const descriptionAfter = screen.getByText('This is a test description');
    expect(descriptionAfter).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /hide description/i })).toBeInTheDocument();
  });

  it('hides description when toggle is clicked again', async () => {
    const user = userEvent.setup();
    render(<BookItem book={mockBook} />);

    const toggleButton = screen.getByRole('button', { name: /show description/i });
    await user.click(toggleButton);

    const hideButton = screen.getByRole('button', { name: /hide description/i });
    await user.click(hideButton);

    const description = screen.queryByText('This is a test description');
    expect(description).not.toBeInTheDocument();
  });

  it('does not show toggle button when description is missing', () => {
    const bookWithoutDescription: Book = {
      id: '2',
      title: 'Book Without Description',
    };
    render(<BookItem book={bookWithoutDescription} />);

    const toggleButton = screen.queryByRole('button');
    expect(toggleButton).not.toBeInTheDocument();
  });

  it('displays placeholder image when imageUrl is missing', () => {
    const bookWithoutImage: Book = {
      id: '3',
      title: 'Book Without Image',
      description: 'Test description',
    };
    render(<BookItem book={bookWithoutImage} />);

    const image = screen.getByAltText('Book cover placeholder');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('placeholder'));
  });

  it('handles image load error gracefully', () => {
    const bookWithInvalidImage: Book = {
      id: '4',
      title: 'Book With Invalid Image',
      description: 'Test description',
      imageUrl: 'https://invalid-url.com/image.jpg',
    };

    render(<BookItem book={bookWithInvalidImage} />);

    const image = screen.getByAltText(expect.stringContaining('cover'));
    expect(image).toBeInTheDocument();

    const errorEvent = new Event('error');
    image.dispatchEvent(errorEvent);

    expect(image).toHaveAttribute('src', expect.stringContaining('placeholder'));
  });

  it('has proper accessibility attributes', () => {
    render(<BookItem book={mockBook} />);

    const article = screen.getByRole('article');
    expect(article).toHaveAttribute('aria-labelledby');

    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    expect(toggleButton).toHaveAttribute('aria-controls');
  });
});


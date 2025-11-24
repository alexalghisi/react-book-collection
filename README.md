# React Book Collection

A reusable React component for displaying a list of books with modern development practices, accessibility standards, and production-ready code.

## Features

- **Book Display**: Each book item shows title, optional description, and optional image
- **Toggle Description**: Show/hide book descriptions with a toggle button
- **Add New Books**: Dynamically add new books to the collection
- **Error Handling**: Graceful handling of invalid image URLs with placeholder fallback
- **Accessibility**: WCAG-compliant with proper ARIA attributes and keyboard navigation
- **Responsive Design**: Mobile-friendly layout
- **Type Safety**: Full TypeScript support with strict type checking

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Testing

```bash
npm test
```

For UI testing:

```bash
npm run test:ui
```

## Component Structure

- `BookItem`: Reusable component for individual book display
- `BookList`: Container component managing the list of books
- `App`: Main application component

## Technologies

- React 18
- TypeScript
- Vite
- Vitest
- React Testing Library


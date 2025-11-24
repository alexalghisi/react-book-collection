import { BookList } from './components/BookList/BookList';
import { mockBooks } from './data/mockBooks';
import './App.css';

export const App = () => {
  return (
    <div className="app">
      <BookList initialBooks={mockBooks} />
    </div>
  );
};


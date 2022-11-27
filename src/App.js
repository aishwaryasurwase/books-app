import './App.css';
import { useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async book => {
    const response = await axios.post('http://localhost:3001/books', book);
    setBooks([...books, response.data]);
  };

  const handleDeleteBook = async id => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);
    if (response.status === 200) {
      const filteredBooks = books.filter(book => book.id !== id);
      setBooks(filteredBooks);
    }
  };

  const handleEditBook = async (id, bookName) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, { title: bookName });
    if (response.status === 200) {
      const filteredBooks = books.map(book => {
        if (book.id === id) {
          book.title = bookName;
        }
        return book;
      });
      setBooks(filteredBooks);
    }
  };

  return (
    <div className="App">
      <BookList books={books} onEdit={handleEditBook} onDelete={handleDeleteBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

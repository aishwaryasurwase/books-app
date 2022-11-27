import './Book.css';
import { useState } from 'react';

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const createBook = event => {
    event.preventDefault();
    onCreate({ title });
    setTitle('');
  };

  const handleTitle = event => {
    setTitle(event.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={createBook}>
        <label htmlFor="title">Title</label>
        <input type="text" name="book" value={title} onChange={handleTitle} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default BookCreate;

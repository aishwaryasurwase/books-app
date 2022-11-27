import { useState } from 'react';

const BookEdit = ({ book, onEdit, setShowEdit }) => {
  const [bookName, setBookName] = useState(book.title);

  const handleUpdateBook = event => {
    event.preventDefault();
    onEdit(book.id, bookName);
    setShowEdit(false);
  };

  return (
    <form onSubmit={handleUpdateBook} className="book-edit">
      <label htmlFor="title">Title</label>
      <input type="text" value={bookName} onChange={e => setBookName(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
};
export default BookEdit;

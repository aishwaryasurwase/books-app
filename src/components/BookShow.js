import './Book.css';
import { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ book, onEdit, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="book-show">
      <div className="book-show_actions">
        <button type="button" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button type="button" onClick={() => onDelete(book.id)}>
          X
        </button>
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2OzTaz1u9dwJfXJoRMYvib0AXv8eyLrWGrPWJCHbmemLs0-NTE9I93WVdLAx41qCtbI&usqp=CAU"
          alt="book"
        />
      </div>
      <div>
        {!showEdit ? (
          <h3>{book.title}</h3>
        ) : (
          <BookEdit book={book} onEdit={onEdit} setShowEdit={setShowEdit} />
        )}
      </div>
    </div>
  );
};
export default BookShow;

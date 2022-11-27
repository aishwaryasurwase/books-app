import BookShow from './BookShow';

const BookList = ({ books, onEdit, onDelete }) => {
  console.log('* books', books);
  return (
    <div className="book-list">
      {books &&
        books.length > 0 &&
        books.map(book => {
          return <BookShow book={book} key={book.id} onEdit={onEdit} onDelete={onDelete} />;
        })}
    </div>
  );
};
export default BookList;

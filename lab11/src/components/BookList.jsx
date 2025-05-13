import React, { useState } from 'react';
import { useBookContext } from '../context/BookContext';
import EditBookForm from './EditBookForm';
import { Link } from 'react-router'

const BookList = () => {
  const { books, deleteBook, loading, error } = useBookContext();
  const [editingBookId, setEditingBookId] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          {editingBookId === book.id ? (
            <EditBookForm book={book} onCancel={() => setEditingBookId(null)} />
          ) : (
            <>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <Link to={`${book.id}/${book.author}/${book.title}`}>Book Detail</Link>
              <button onClick={() => setEditingBookId(book.id)}>Edit</button>
              <button onClick={() => deleteBook(book.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookList;

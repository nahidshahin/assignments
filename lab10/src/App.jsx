import React from 'react';
import { BookProvider } from './context/BookContext';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import './App.css'

const App = () => (
  <BookProvider>
    <div className="app">
      <h1>Book Library</h1>
      <AddBookForm />
      <BookList />
    </div>
  </BookProvider>
);

export default App;

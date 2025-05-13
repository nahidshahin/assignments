import React from 'react';
import { BookProvider } from './context/BookContext';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import Layout from './components/Layout';
import NoMatch from './components/NoMatch';
import './App.css'


import { Routes, Route } from 'react-router'

function App() {

  return (
    <BookProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<BookList />} />
          <Route path="books" element={<BookList />} />
          <Route path="books/:id/:author/:title" element={<BookDetail />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BookProvider>
  )
}

export default App;

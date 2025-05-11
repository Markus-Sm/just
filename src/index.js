
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './Book';

const Title = () => {
  return (
    <h1 className="title">Best sellers in books</h1>
  )
}

const BookList = () => {
  
    return (
    <>
    <Title/>
    <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} number={index + 1}/>
          )
        })}
    </section>
    </>
    )
}

// https://www.amazon.com/Best-Sellers-Books/zgbs/books

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
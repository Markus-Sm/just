
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  { 
    title: "The Let Them Theory",
    author: "Mel Robbins",
    img: "./images/book-1.jpg",
    children: "lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    id: 1
  },
  {
    title: "Sunrise on the Reaping",
    author: "Suzanne Collins",
    img: "./images/book-2.jpg",
    id: 2
  },
  {
    title: "Mom, I Want to Hear Your Story",
    author: "Jeffrey Mason",
    img: "./images/book-3.jpg",
    id: 3
  },
]


const BookList = () => {
  const getBook = (id) => {
     const book = books.find((book) => book.id === id);
     console.log(book.id);
     return book;
  }
  
    return (
    <section className="booklist">
        {books.map((book) => {
          return (
            <Book {...book} key={book.id} getBook={getBook}/>
          )
        })}
    </section>
    )
}


const Book = (props) => {
  const {img, title, author, id, children, getBook} = props;

  const handleGetBook = () => {
    getBook(id);
  }

    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <button onClick={handleGetBook}>Display Title</button>
            <p>{children}</p>
        </article>
    )
}

// https://www.amazon.com/Best-Sellers-Books/zgbs/books

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
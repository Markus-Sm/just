
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  { 
    title: "The Let Them Theory",
    author: "Mel Robbins",
    img: "./images/book-1.jpg",
    children: "lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    title: "Sunrise on the Reaping",
    author: "Suzanne Collins",
    img: "./images/book-2.jpg",
  },
  {
    title: "Mom, I Want to Hear Your Story",
    author: "Jeffrey Mason",
    img: "./images/book-3.jpg",
  },
]


const BookList = () => {
    return <section className="booklist">
        {books.map(() => {
          return (
            <div>
              <h2>item</h2>
            </div>
          )
        })}
    </section>
}

const Book = (props) => {
    const {img, title, author, children} = props;
    console.log(props);
    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <p>{children}</p>
        </article>
    )
}

// https://www.amazon.com/Best-Sellers-Books/zgbs/books

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
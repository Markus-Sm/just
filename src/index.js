
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
    title: "The Let Them Theory",
    author: "Mel Robbins",
    img: "./images/book-1.jpg",
}

const secondBook = {
    title: "Sunrise on the Reaping",
    author: "Suzanne Collins",
    img: "./images/book-2.jpg",
}

const thirdBook = {
    title: "Mom, I Want to Hear Your Story",
    author: "Jeffrey Mason",
    img: "./images/book-3.jpg",
}

const BookList = () => {
    return <section className="booklist">
        <Book {...firstBook} />
        <Book {...secondBook} />
        <Book {...thirdBook} />
    </section>
}

const Book = (props) => {
    const {img, title, author} = props;
    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
}

// https://www.amazon.com/Best-Sellers-Books/zgbs/books

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
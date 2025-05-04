
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {
    return <section className="booklist">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
    </section>
}

const Book = () => {
    return (
        <article className="book">
            <Image />
            <Title />
            <Author />
        </article>
    )
}

// https://www.amazon.com/Best-Sellers-Books/zgbs/books

const Image = () => <img src="https://m.media-amazon.com/images/I/91ZVf3kNrcL._SY466_.jpg" alt="The Let Them Theory" />;

const Title = () => <h2>The Let Them Theory</h2>;

const Author = () => <h2>Mel Robbins</h2>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

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

const Image = () => <img src="./images/book-1.jpg" alt="The Let Them Theory" />;

const Title = () => <h2>The Let Them Theory</h2>;

const Author = () => {

    const inlineHeadingStyles = {
        color: '#617d98',
        fontSize: '0.75rem',
        marginTop: '0.5rem',
    } 

    return <h4 style={inlineHeadingStyles}>Mel Robbins</h4>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
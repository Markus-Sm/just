
import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting(){
    return (
        <>
            <Person />
            <Message />
            <Book />
        </>
    )
}

const BookList = () => {
    return <section></section>
}

const Book = () => {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    )
}

const Image = () => <h2>Image placeholder</h2>;

const Title = () => <h2>Book Title</h2>;

const Author = () => <h2>Book Author</h2>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
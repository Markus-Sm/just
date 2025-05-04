
import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting(){
    return (
        <>
            <Person />
            <Message />
        </>
    )
}

const Person = () => <h2>Mark Samofał</h2>

const Message = () => <p>Thank you for visiting my website</p>

const Book = () => {
    return (
        <article>
            hello
        </article>
    )
}

const Image = () => <h2>Image placeholder</h2>;

const Title = () => <h2>Book Title</h2>;

const Author = () => <h2>Book Author</h2>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
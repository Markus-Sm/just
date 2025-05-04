
import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting(){
    return <h3>Hello There</h3>
}

const Person = () => <h2>Mark Samofał</h2>

const Message = () => <p>Thank you for visiting my website</p>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
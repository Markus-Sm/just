
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
  
    return <section className="booklist">
      <EventExamples />
        {books.map((book) => {
          return (
            <Book {...book} key={book.id} />
          )
        })}
    </section>
}

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log("console.log e.target", e.target);
    console.log("console.log e.target.value", e.target.value);
    console.log("console.log e.target.name", e.target.name);
  }

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  }
  const handleButtonClick = () => {
    alert("handle button click");
  }
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input onChange={handleFormInput} type="text" name="example" id="example" style={{margin: '1rem 0'}}/>
        <button type="submit">Submit</button>
        <div>
          <button type="button" onClick={handleButtonClick} style={{margin: '1rem 0'}}>Submit</button>
        </div>
      </form>
    </section>
  )
}

const Book = (props) => {
  const {img, title, author, children} = props;
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
const Book = (props) => {
    const {img, title, author, children, number} = props;
  
    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <p>{children}</p>
            <span className="number">{number}</span>
        </article>
    )
}

export default Book;

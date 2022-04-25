import React from 'react';
import classes from "./BookItem.module.css";

export const BookItem = (props) => {
  return (
    <li className={classes.item}>
    <figure>
      <blockquote>
        <p>{props.book.bookTitle}</p>
      </blockquote>
      <figcaption>{props.book.author}</figcaption>
    </figure>
    {/* <Link className='btn' to={`/quotes/${props.id}`}>
      View Fullscreen
    </Link> */}
  </li>
  
  )
}

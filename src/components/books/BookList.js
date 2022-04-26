import React, { Fragment } from "react";
import { BookItem } from "./BookItem";
import classes from "./BookList.module.css";

export const BookList = () => {
  let Books = [
    {
      bookId: 1,
      bookTitle: "Hello1",
      author: "Kru",
    },
    {
      bookId: 2,
      bookTitle: "Hello2",
      author: "Kru",
    },
    {
      bookId: 3,
      bookTitle: "Hello3",
      author: "Kru",
    },
  ];

  return (
    <Fragment>
      <ul className={classes["book-list"]}>
        {Books.map((book) => (
          <BookItem key={book.bookId} book={book} />
        ))}
      </ul>
    </Fragment>
  );
};

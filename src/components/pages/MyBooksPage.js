import React from "react";
import { BookForm } from "../books/BookForm";
import { BookList } from "../books/BookList";

export const MyBooksPage = () => {
  return (
    <div className="App-container">
      <h1>MyBooksPage</h1>
        <BookList/>
    </div>
  );
};

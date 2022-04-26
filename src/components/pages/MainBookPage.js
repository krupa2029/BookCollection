import React from "react";
import { BookForm } from "../books/BookForm";
import { BookList } from "../books/BookList";

export const MainBookPage = () => {
  return (
    <div className = "App-container" >
      <h1>MainBookPage</h1>
      <BookList />
    </div>
  );
};

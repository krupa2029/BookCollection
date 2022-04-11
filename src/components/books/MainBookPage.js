import React from "react";
import { BookForm } from "./BookForm";
import { BookList } from "./BookList";

export const MainBookPage = () => {
  return (
    <div>
      <h1>MainBookPage</h1>
      <BookForm></BookForm>
      <BookList></BookList>
    </div>
  );
};

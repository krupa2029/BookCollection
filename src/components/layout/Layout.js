import React from 'react';
import { BookList } from '../books/BookList';
import { MainBookPage } from '../books/MainBookPage';
import { Navbar } from '../navbar/Navbar';

export const Layout = () => {
  return (
    <div>
    <Navbar></Navbar>
    <MainBookPage></MainBookPage>
    </div>
  )
}

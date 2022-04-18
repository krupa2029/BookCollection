import React from 'react';
import { Navbar } from '../navbar/Navbar';

export const Layout = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <main>{props.children}</main>
    </div>
  )
}

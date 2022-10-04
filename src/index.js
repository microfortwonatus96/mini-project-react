import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, } from "react-router-dom";
import './index.css';
// import App from './App';
import Form from './Form/Login';
import Navbar from './Navbar/Navbar';
import Home from './Home';
import List from './List/List';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Navbar />
      <Outlet />
    </>,
    errorElement: <p>Page Not Found</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/list",
        element: <List />,
      },
    ],
  },
  {
    path: "/login",
    element: <Form />,
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
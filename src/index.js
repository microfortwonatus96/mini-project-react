import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
// import { createBrowserRouter, RouterProvider, Outlet, } from "react-router-dom";
import './index.css';
import App from './App';
// import Form from './Form/Login';
// import Navbar from './Navbar/Navbar';
// import Main from './Components/Main';
// import Home from './Home/Home';
// import List from './List/List';
// import Card from './Card/Card';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <>
//       <App />
//       <Outlet />
//     </>,
//     errorElement: <p>Page Not Found</p>,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/list",
//         element: <List />,
//       },
//       {
//         path: "/movies",
//         element: <Card />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Form />,
//   }
// ]);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={router} />
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
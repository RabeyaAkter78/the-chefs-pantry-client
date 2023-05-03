import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './component/Layouts/Main';
import Home from './component/Home/Home';
import Recipes from './component/Recipes/Recipes';
import Blogs from './component/Blogs/Blogs';
import Login from './component/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/recipes",
        element: <Recipes></Recipes>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

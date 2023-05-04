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
import Register from './component/Register/Register';
import Error from './component/Error/Error';
import Authprovider from './component/Providers/Authprovider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';



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
        path: "/register",
        element: <Register></Register>
      },

      {
        path: "/recipes",
        element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/chefs')
      },
      // {
      //   path: "/recipes",
      //   element: <PrivateRoute><Recipes></Recipes></PrivateRoute>
      // },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router}></RouterProvider>
    </Authprovider>

  </React.StrictMode>,
)

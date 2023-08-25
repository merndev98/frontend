import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ErrorPage from './components/Error.jsx'
import Login from './components/Login.jsx'
import About from './components/About.jsx'
import SignUp from './components/Signup.jsx'
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import NoteState from './context/notes/NoteState.jsx';

const NavbarWrapper = () => {
  return (
  <div>
      <Navbar/>
      <Outlet/>
  </div>
  )
};


const router = createBrowserRouter([{
  path: "/",
  element: <NavbarWrapper />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/home",
      element: <Home />,
    }

  ]
},
  ]);



ReactDOM.createRoot(document.getElementById('root')).render( < React.StrictMode >
  <NoteState>
  <RouterProvider router={router} />
  </NoteState>
</React.StrictMode>
)
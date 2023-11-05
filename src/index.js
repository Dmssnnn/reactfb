import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import RegistrationForm from './components/Pages/registrationForm';
import CreateAcc from './components/Pages/createAcc';
import FacebookPost from './components/Pages/FacebookPost';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegistrationForm />
  },
  {
    path: "/CreateAcc",
    element: <CreateAcc />
  },
  {
    path: "/FacebookPost",
    element: <FacebookPost />
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);



// import React from 'react';
// import ReactDOM from 'react-dom/client'; // Import the correct `createRoot` method
// import App from './App.jsx';
// import './index.css';
// import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'; // Remove the conflicting `router` import
// import Layout from './Layout.jsx';
// import Home from './components/Home/Home.jsx';
// import About from './components/About/about.jsx';
// import Contact from './components/Contact/Contact.jsx';
// // import { Route } from 'express';
// import Github from './components/Github/Github.jsx';
// import User from './components/User/User.jsx';
// import { githubInfoLoader } from './components/Github/Github.jsx';
// // Define the router here

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path: "user/:userid",
//         element: <User />
//       },
//       {
//        loader: {
//          githubInfoLoader
//        },
//         path: "github",
//         element: <Github/>
//       }
//     ]
//   }
// ]);

// // const router  = createBrowserRouter(
// //   createRoutesFromElements(
// //  <Route path='/' element={<Layout/>}>
// //   <Route path=''  element={<Home/>}/>
// //   <Route path='about'  element={<About/>}/>
// //   <Route path='contact'  element={<Contact/>}/>
// //   </Route>
// //   )
// // )

// // Use ReactDOM.createRoot to render the app
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the correct `createRoot` method
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx'; // Fixed capitalization
import Contact from './components/Contact/Contact.jsx';
import Github from './components/Github/Github.jsx';
import User from './components/User/User.jsx';
import { githubInfoLoader } from './components/Github/Github.jsx'; // Ensure this loader is correctly defined in Github.jsx

// Define the router here
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "user/:userid",
        element: <User />
      },
      {
        path: "github",
        element: <Github />,
        loader: githubInfoLoader // Moved loader to the correct position
      }
    ]
  }
]);

// Use ReactDOM.createRoot to render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

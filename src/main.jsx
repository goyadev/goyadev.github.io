import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Bio } from "./components/Bio/Bio.jsx";
import NotFound from "./components/Pages/NotFound.jsx";
import Projects from "./components/Pages/Projects.jsx";
import Contact from "./components/Pages/Contact.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Bio />,
      },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

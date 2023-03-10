import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import ErrorPage from "./ErrorPage";
import CustomerService from "./routes/CustomerService";
import Organigram from "./routes/Organigram";
import Services from "./routes/Services";
import "./styles/index.css";
import Inmotur from "./routes/Inmotur";
import Palmares from "./routes/Palmares";
import ITH from "./routes/ITH";
import We from "./routes/We";
import Emprestur from "./routes/Emprestur";
import Hoteles from "./routes/Hoteles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/¿quiénes somos?",
        element: <We />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/organigrama",
        element: <Organigram />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/servicios",
        element: <Services />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/atención al cliente",
        element: <CustomerService />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/inmotur",
        element: <Inmotur />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/palmares",
        element: <Palmares />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/emprestur",
        element: <Emprestur />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/ITH",
        element: <ITH />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/Hoteles",
        element: <Hoteles />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

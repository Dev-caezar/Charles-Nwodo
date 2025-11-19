import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import Home from "../pages/Home";

export const Elements = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

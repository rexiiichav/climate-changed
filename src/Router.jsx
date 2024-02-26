import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "../components/Home/Home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <p>Hi</p>,
    },
    {
      path: "profile",
      element: <p>Hi</p>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

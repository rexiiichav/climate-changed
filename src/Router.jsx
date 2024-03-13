import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "/home/rex/repos/climate-changed/src/App.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <p>Error</p>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

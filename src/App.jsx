import Home from "./pages/home/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./pages/list/list";
import Layout from "./pages/layout/layout";
import SinglePage from "./pages/singlePage/singlePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/list",
          element: <List />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

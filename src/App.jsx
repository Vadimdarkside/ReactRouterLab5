import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./pages/User";
import Login, { action as LoginSubmitionAction } from "./pages/Login";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "user", element: <User /> },
      { path: "login", element: <Login />, action: LoginSubmitionAction },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

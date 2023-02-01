import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import Create from "./pages/Create.js";
import Home from "./pages/Home.js";
import Single from "./pages/Single.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import "../src/style.scss";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/courses/:id",
        element:<Single/>
      },
      {
        path:"/create",
        element:<Create/>
      },
    ]
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  },

]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Product from "./pages/Product";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  }
];

export default routes;
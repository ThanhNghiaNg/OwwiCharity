import { Route } from "react-router-dom";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    element: <Home/>,
  },
  {
path:"/login",
  }
];

const  userRoutes = routes.map((route) => (
  <Route key={route.path} path={route.path} element={route.element} />
));

export default userRoutes

import { Route } from "react-router-dom";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    element: <Home/>,
  },
];

const  userRoutes = routes.map((route) => (
  <Route key={new Date().getTime()} path={route.path} element={route.element} />
));

export default userRoutes

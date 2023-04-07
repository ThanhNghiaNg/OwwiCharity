import { Route } from "react-router-dom";
import Home from "../pages/Home";
import AuthForm from "../components/AuthForm/AuthForm";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <AuthForm isLogin={true} />,
  },
  {
    path: "/register",
    element: <AuthForm isLogin={false} />,
  },
  {
path:"/login",
  }
];

const userRoutes = routes.map((route) => (
  <Route key={new Date().getTime()} path={route.path} element={route.element} />
));

export default userRoutes;

import { Route } from "react-router-dom";
import UserProfile from '../pages/UserProfile'

const routes = [
  {
    path: "/user",
    element: <UserProfile />,
  },
];

const userRoutes = routes.map((route) => (
  <Route key={new Date().getTime()} path={route.path} element={route.element} />
));

export default userRoutes;

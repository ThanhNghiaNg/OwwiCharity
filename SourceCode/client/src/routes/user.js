import { Route } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
import { USER_TAB } from "../utils/global";

const routes = [
  {
    path: USER_TAB.INFORMATION,
    element: <UserProfile />,
  },
  {
    path: USER_TAB.PASSWORD,
    element: <UserProfile />,
  },
  {
    path: USER_TAB.HISTORY,
    element: <UserProfile />,
  },
  {
    path: USER_TAB.BLOCK,
    element: <UserProfile />,
  },
];

const userRoutes = routes.map((route) => (
  <Route key={new Date().getTime()} path={route.path} element={route.element} />
));

export default userRoutes;

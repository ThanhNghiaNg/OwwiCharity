import { Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const items = [
  { path: "/login", element: <Login/>, name: "Login" },
  { path: "/register", element: <Register/>, name: "Register" },
  { path: "*", element: <p>Page not found</p>, name: "other" },
];
const publicRoutes = items.map((item) => (
  <Route path={item.path} element={item.element} key={item.name} />
));
export default publicRoutes;

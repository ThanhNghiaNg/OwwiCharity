import { Route } from "react-router-dom";

const items = [
  { path: "/login", element: null, name: "Login" },
  { path: "/resigter", element: null, name: "Register" },
  { path: "*", element: <p>Page not found</p>, name: "other" },
];
const publicRoutes = items.map((item) => (
  <Route path={item.path} element={item.element} key={item.name} />
));
export default publicRoutes;

import { Route } from "react-router-dom";
import CreateProduct from "../pages/CreateProduct";
import UpdateProduct from "../pages/UpdateProdudct";

const items = [
  {
    path: "/product/create",
    element:<CreateProduct />,
    name: "Create Product",
  },
  {
    path: "/product/edit/:id",
    element: <UpdateProduct />,
    name: "Edit Product",
  },
  { path: "*", element: <p>test</p>, name: "other" },
];
const adminRoutes = items.map((item) => {
  return <Route path={item.path} element={item.element} key={item.name} />;
});

export default adminRoutes;

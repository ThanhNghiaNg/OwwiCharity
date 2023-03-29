import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import publicRoutes from "./routes/public";
import adminRoutes from "./routes/admin";
import MainLayout from "./layout/MainLayout";
function App() {
  return (
    <MainLayout>
      <Routes>
        {adminRoutes}
        {publicRoutes}
      </Routes>
    </MainLayout>
  );
}

export default App;

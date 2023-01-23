import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Orders from "./Orders";
import Shop from "./Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/shop" replace={true} />} />
        <Route path="shop" element={<Shop />} />
        <Route path="orders/:orderId" element={<Orders />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
}

export default App;

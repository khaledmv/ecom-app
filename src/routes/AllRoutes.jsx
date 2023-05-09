import { Routes, Route } from "react-router-dom"
import { HomePage, Login, ProductDetails, ProductList, Register } from "../pages"
import { CartPage } from "../pages/Cart/CartPage"
import { ProtectedRoute } from "./ProtectedRoute"
import { OrderPage } from "../pages/Order/OrderPage"
import { DashboardPage } from "../pages/Dashboard/DashboardPage"
import { PageNotFound } from "../pages/PageNotFound"

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/products" element={<ProductList/>} />
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
            <Route path="/order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </>
  )
}

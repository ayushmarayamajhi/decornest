import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

import AdminLayout from './layouts/AdminLayout'
import MerchantLayout from './layouts/MerchantLayout'

// Auth Pages
import Login from './pages/Login'
import Signup from './pages/Signup'

// Customer Pages
import CustomerHome from './pages/customer/CustomerHome'
import CustomerProductDetail from './pages/customer/CustomerProductDetail'
import CustomerCart from './pages/customer/CustomerCart'
import CustomerCheckout from './pages/customer/CustomerCheckout'
import CustomerOrderSuccess from './pages/customer/CustomerOrderSuccess'

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminMerchants from './pages/admin/AdminMerchants'
import AdminCategories from './pages/admin/AdminCategories'

// Merchant Pages
import MerchantDashboard from './pages/merchant/MerchantDashboard'
import MerchantProducts from './pages/merchant/MerchantProducts'
import MerchantOrders from './pages/merchant/MerchantOrders'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing Root & Auth Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Customer Storefront Routes */}
          <Route path="/store" element={<CustomerHome />} />
          <Route path="/store/product/:id" element={<CustomerProductDetail />} />
          <Route path="/store/cart" element={<CustomerCart />} />
          <Route path="/store/checkout" element={<CustomerCheckout />} />
          <Route path="/store/order-success" element={<CustomerOrderSuccess />} />

          {/* Admin Portal Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="merchants" element={<AdminMerchants />} />
            <Route path="categories" element={<AdminCategories />} />
          </Route>

          {/* Merchant Hub Routes */}
          <Route path="/merchant" element={<MerchantLayout />}>
            <Route index element={<MerchantDashboard />} />
            <Route path="dashboard" element={<MerchantDashboard />} />
            <Route path="products" element={<MerchantProducts />} />
            <Route path="orders" element={<MerchantOrders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
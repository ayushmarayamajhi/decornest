import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import AdminLayout from './layouts/AdminLayout'
import MerchantLayout from './layouts/MerchantLayout'

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminCustomers from './pages/admin/AdminCustomers'
import AdminMerchants from './pages/admin/AdminMerchants'
import AdminProducts from './pages/admin/AdminProducts'
import AdminCategories from './pages/admin/AdminCategories'
import AdminOrders from './pages/admin/AdminOrders'
import AdminReviews from './pages/admin/AdminReviews'
import AdminReports from './pages/admin/AdminReports'

// Merchant Pages
import MerchantDashboard from './pages/merchant/MerchantDashboard'
import MerchantProducts from './pages/merchant/MerchantProducts'
import MerchantStore from './pages/merchant/MerchantStore'
import MerchantInventory from './pages/merchant/MerchantInventory'
import MerchantOrders from './pages/merchant/MerchantOrders'
import MerchantSales from './pages/merchant/MerchantSales'

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Landing Route */}
        <Route path="/" element={
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
              <Link className="navbar-brand fw-bold" to="/">🏠 DecorNest</Link>
              <div className="navbar-nav">
                <Link className="nav-link" to="/admin">Admin Dashboard</Link>
                <Link className="nav-link" to="/merchant">Merchant Dashboard</Link>
              </div>
            </nav>
            <div className="container text-center py-5">
              <h2>Welcome to DecorNest Setup Page</h2>
              <p>Select Admin or Merchant Dashboard above to navigate.</p>
            </div>
          </div>
        } />

        {/* Admin Routes */}
        <Route path="/admin/*" element={
          <AdminLayout>
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/customers" element={<AdminCustomers />} />
              <Route path="/merchants" element={<AdminMerchants />} />
              <Route path="/products" element={<AdminProducts />} />
              <Route path="/categories" element={<AdminCategories />} />
              <Route path="/orders" element={<AdminOrders />} />
              <Route path="/reviews" element={<AdminReviews />} />
              <Route path="/reports" element={<AdminReports />} />
            </Routes>
          </AdminLayout>
        } />

        {/* Merchant Routes */}
        <Route path="/merchant/*" element={
          <MerchantLayout>
            <Routes>
              <Route path="/" element={<MerchantDashboard />} />
              <Route path="/store" element={<MerchantStore />} />
              <Route path="/products" element={<MerchantProducts />} />
              <Route path="/inventory" element={<MerchantInventory />} />
              <Route path="/orders" element={<MerchantOrders />} />
              <Route path="/sales" element={<MerchantSales />} />
            </Routes>
          </MerchantLayout>
        } />
      </Routes>
    </Router>
  )
}

export default App
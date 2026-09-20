import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import MerchantLayout from './layouts/MerchantLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import MerchantDashboard from './pages/merchant/MerchantDashboard'

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

        {/* Admin Routes with Sidebar Layout */}
        <Route path="/admin/*" element={
          <AdminLayout>
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/customers" element={<h3>Customers Management Page</h3>} />
              <Route path="/merchants" element={<h3>Merchants Management Page</h3>} />
              <Route path="/products" element={<h3>Products Management Page</h3>} />
              <Route path="/categories" element={<h3>Categories Management Page</h3>} />
              <Route path="/orders" element={<h3>Orders Management Page</h3>} />
              <Route path="/reviews" element={<h3>Reviews Management Page</h3>} />
              <Route path="/reports" element={<h3>Reports & Analytics Page</h3>} />
            </Routes>
          </AdminLayout>
        } />

        {/* Merchant Routes with Sidebar Layout */}
        <Route path="/merchant/*" element={
          <MerchantLayout>
            <Routes>
              <Route path="/" element={<MerchantDashboard />} />
              <Route path="/store" element={<h3>Store Settings Page</h3>} />
              <Route path="/products" element={<h3>Merchant Products Page</h3>} />
              <Route path="/inventory" element={<h3>Inventory Management Page</h3>} />
              <Route path="/orders" element={<h3>Merchant Orders Page</h3>} />
              <Route path="/sales" element={<h3>Sales Reports Page</h3>} />
            </Routes>
          </MerchantLayout>
        } />
      </Routes>
    </Router>
  )
}

export default App
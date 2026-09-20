import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AdminDashboard from './pages/admin/AdminDashboard'
import MerchantDashboard from './pages/merchant/MerchantDashboard'

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand fw-bold" to="/">🏠 DecorNest</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/admin">Admin Dashboard</Link>
          <Link className="nav-link" to="/merchant">Merchant Dashboard</Link>
        </div>
      </nav>

      <div className="py-4">
        <Routes>
          <Route path="/" element={
            <div className="container text-center py-5">
              <h2>Welcome to DecorNest Setup Page</h2>
              <p>Select Admin or Merchant Dashboard from the top navbar.</p>
            </div>
          } />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/merchant" element={<MerchantDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
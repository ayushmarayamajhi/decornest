import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function MerchantLayout() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'btn-success text-white' : 'text-white-50 hover-light'
  }

  return (
    <div className="d-flex min-vh-100 bg-light">
      {/* Sidebar Navigation */}
      <div className="bg-dark text-white p-3 d-flex flex-column" style={{ width: '250px', minWidth: '250px' }}>
        <div className="d-flex align-items-center gap-2 mb-4 px-2">
          <i className="bi bi-shop fs-4 text-success"></i>
          <h5 className="fw-bold mb-0 text-white">Merchant Hub</h5>
        </div>

        <nav className="nav nav-pills flex-column gap-1">
          <Link to="/merchant/dashboard" className={`nav-link text-start py-2 px-3 rounded ${isActive('/merchant/dashboard')}`}>
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </Link>
          <Link to="/merchant/products" className={`nav-link text-start py-2 px-3 rounded ${isActive('/merchant/products')}`}>
            <i className="bi bi-box-seam me-2"></i> Products
          </Link>
          <Link to="/merchant/orders" className={`nav-link text-start py-2 px-3 rounded ${isActive('/merchant/orders')}`}>
            <i className="bi bi-bag-check me-2"></i> Orders
          </Link>
        </nav>

        <div className="mt-auto pt-3 border-top border-secondary px-2">
          <Link to="/store" className="text-white-50 text-decoration-none small">
            <i className="bi bi-box-arrow-left me-1"></i> Back to Storefront
          </Link>
        </div>
      </div>

      {/* Main Content Area where child routes (MerchantProducts, MerchantOrders, etc.) render */}
      <div className="flex-grow-1 p-4 overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}
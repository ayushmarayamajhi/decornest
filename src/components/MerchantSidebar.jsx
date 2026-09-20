import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function MerchantSidebar() {
  const location = useLocation()

  // Helper to highlight active link
  const isActive = (path) => location.pathname === path ? 'active bg-success' : 'text-white'

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: '250px', minHeight: '100vh' }}>
      <Link to="/merchant" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none px-2">
        <i className="bi bi-shop fs-4 me-2 text-success"></i>
        <span className="fs-5 fw-bold">Merchant Hub</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/merchant" className={`nav-link ${isActive('/merchant')}`}>
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/merchant/store" className={`nav-link ${isActive('/merchant/store')}`}>
            <i className="bi bi-building me-2"></i> Store Profile
          </Link>
        </li>
        <li>
          <Link to="/merchant/products" className={`nav-link ${isActive('/merchant/products')}`}>
            <i className="bi bi-box-seam me-2"></i> Products
          </Link>
        </li>
        <li>
          <Link to="/merchant/inventory" className={`nav-link ${isActive('/merchant/inventory')}`}>
            <i className="bi bi-clipboard-data me-2"></i> Inventory
          </Link>
        </li>
        <li>
          <Link to="/merchant/orders" className={`nav-link ${isActive('/merchant/orders')}`}>
            <i className="bi bi-bag-check me-2"></i> Orders
          </Link>
        </li>
        <li>
          <Link to="/merchant/sales" className={`nav-link ${isActive('/merchant/sales')}`}>
            <i className="bi bi-currency-dollar me-2"></i> Sales Reports
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown px-2">
        <span className="text-muted small">DecorNest Merchant</span>
      </div>
    </div>
  )
}

export default MerchantSidebar
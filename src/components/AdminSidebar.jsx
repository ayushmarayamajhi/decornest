import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function AdminSidebar() {
  const location = useLocation()

  // Helper to highlight active link
  const isActive = (path) => location.pathname === path ? 'active bg-primary' : 'text-white'

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: '250px', minHeight: '100vh' }}>
      <Link to="/admin" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none px-2">
        <i className="bi bi-shield-lock-fill fs-4 me-2 text-primary"></i>
        <span className="fs-5 fw-bold">Admin Panel</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/admin" className={`nav-link ${isActive('/admin')}`}>
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/customers" className={`nav-link ${isActive('/admin/customers')}`}>
            <i className="bi bi-people me-2"></i> Customers
          </Link>
        </li>
        <li>
          <Link to="/admin/merchants" className={`nav-link ${isActive('/admin/merchants')}`}>
            <i className="bi bi-shop me-2"></i> Merchants
          </Link>
        </li>
        <li>
          <Link to="/admin/products" className={`nav-link ${isActive('/admin/products')}`}>
            <i className="bi bi-box-seam me-2"></i> Products
          </Link>
        </li>
        <li>
          <Link to="/admin/categories" className={`nav-link ${isActive('/admin/categories')}`}>
            <i className="bi bi-grid me-2"></i> Categories
          </Link>
        </li>
        <li>
          <Link to="/admin/orders" className={`nav-link ${isActive('/admin/orders')}`}>
            <i className="bi bi-bag-check me-2"></i> Orders
          </Link>
        </li>
        <li>
          <Link to="/admin/reviews" className={`nav-link ${isActive('/admin/reviews')}`}>
            <i className="bi bi-star me-2"></i> Reviews
          </Link>
        </li>
        <li>
          <Link to="/admin/reports" className={`nav-link ${isActive('/admin/reports')}`}>
            <i className="bi bi-graph-up me-2"></i> Reports
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown px-2">
        <span className="text-muted small">DecorNest Admin Mode</span>
      </div>
    </div>
  )
}

export default AdminSidebar
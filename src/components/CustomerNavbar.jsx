import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CustomerNavbar() {
  const { totalCartCount } = useCart()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top shadow-sm px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-3 text-primary" to="/store">
          🏠 DecorNest
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto ms-4">
            <li className="nav-item">
              <Link className="nav-link active fw-semibold" to="/store">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/store">Shop Products</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3">
            <Link to="/store/cart" className="btn btn-outline-primary position-relative">
              <i className="bi bi-cart3 fs-5"></i>
              {totalCartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalCartCount}
                </span>
              )}
            </Link>
            <Link to="/admin" className="btn btn-sm btn-outline-secondary">
              Admin Portal
            </Link>
            <Link to="/merchant" className="btn btn-sm btn-outline-success">
              Merchant Hub
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default CustomerNavbar
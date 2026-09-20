import React from 'react'
import CustomerNavbar from '../../components/CustomerNavbar'
import { Link } from 'react-router-dom'

function CustomerOrderSuccess() {
  const orderId = "DN-" + Math.floor(100000 + Math.random() * 900000)

  return (
    <div className="bg-light min-vh-100">
      <CustomerNavbar />

      <div className="container py-5 text-center" style={{ maxWidth: '650px' }}>
        <div className="card border-0 shadow-sm p-5 rounded-4">
          <div className="mb-3">
            <i className="bi bi-check-circle-fill text-success display-1"></i>
          </div>
          
          <h2 className="fw-bold mb-2">Thank You for Your Order!</h2>
          <p className="text-muted mb-4">
            We’ve received your order and are getting it ready. A confirmation email has been sent to your address.
          </p>

          <div className="bg-light p-3 rounded-3 mb-4 text-start">
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Order ID:</span>
              <span className="fw-bold text-dark">{orderId}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Payment Method:</span>
              <span className="fw-semibold">Cash on Delivery</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="text-muted">Estimated Delivery:</span>
              <span className="fw-semibold text-primary">3 - 5 Business Days</span>
            </div>
          </div>

          <div className="d-grid gap-2">
            <Link to="/store" className="btn btn-primary fw-bold py-2 fs-5">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerOrderSuccess
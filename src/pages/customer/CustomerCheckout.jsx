import React from 'react'
import CustomerNavbar from '../../components/CustomerNavbar'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

function CustomerCheckout() {
  const navigate = useNavigate()
  const { cartSubtotal, clearCart } = useCart()

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    clearCart()
    navigate('/store/order-success')
  }

  return (
    <div className="bg-light min-vh-100">
      <CustomerNavbar />
      
      <div className="container py-5">
        <h2 className="fw-bold mb-4"><i className="bi bi-credit-card me-2"></i>Checkout</h2>
        
        <form onSubmit={handlePlaceOrder}>
          <div className="row g-4">
            {/* Shipping & Payment Form */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm p-4 mb-4">
                <h5 className="fw-bold mb-3">Shipping Information</h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">First Name</label>
                    <input type="text" className="form-control" placeholder="John" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Last Name</label>
                    <input type="text" className="form-control" placeholder="Doe" required />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">Street Address</label>
                    <input type="text" className="form-control" placeholder="123 Main St" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">City</label>
                    <input type="text" className="form-control" placeholder="Kathmandu" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Phone Number</label>
                    <input type="tel" className="form-control" placeholder="+977 9800000000" required />
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm p-4">
                <h5 className="fw-bold mb-3">Payment Method</h5>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="paymentMethod" id="cod" defaultChecked />
                  <label className="form-check-label fw-semibold" htmlFor="cod">
                    Cash on Delivery (COD)
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="paymentMethod" id="digitalWallet" />
                  <label className="form-check-label fw-semibold" htmlFor="digitalWallet">
                    Digital Wallet (eSewa / Khalti / Fonepay)
                  </label>
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm p-4">
                <h5 className="fw-bold mb-3">Order Total</h5>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Delivery</span>
                  <span className="text-success fw-bold">FREE</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fs-5 fw-bold mb-4">
                  <span>Total Amount</span>
                  <span className="text-primary">${cartSubtotal.toFixed(2)}</span>
                </div>
                <button type="submit" className="btn btn-success w-100 py-2 fw-bold fs-5">
                  Place Order
                </button>
                <Link to="/store/cart" className="btn btn-link text-decoration-none w-100 text-center mt-2">
                  Return to Cart
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CustomerCheckout
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CustomerNavbar from '../../components/CustomerNavbar'
import { useCart } from '../../context/CartContext'

export default function CustomerCheckout() {
  const { cartItems, clearCart } = useCart()
  const navigate = useNavigate()

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'cod'
  })

  // Calculate Summary Totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  )
  const shipping = subtotal > 0 ? 15.0 : 0.0
  const total = subtotal + shipping

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Generate a quick random Order ID
    const orderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`

    // Save mock order details into localStorage so Order Success page can display it
    const orderDetails = {
      orderId,
      items: cartItems,
      subtotal,
      shipping,
      total,
      shippingAddress: formData,
      date: new Date().toLocaleDateString()
    }
    localStorage.setItem('decorNest_last_order', JSON.stringify(orderDetails))

    // Clear cart and navigate to Order Success
    clearCart()
    navigate('/store/order-success')
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-light min-vh-100">
        <CustomerNavbar />
        <div className="container py-5 text-center">
          <div className="card border-0 shadow-sm p-5 max-w-lg mx-auto">
            <i className="bi bi-cart-x display-1 text-secondary mb-3"></i>
            <h4 className="fw-bold">No Items to Checkout</h4>
            <p className="text-muted mb-4">
              Your cart is empty. Add some items to your cart before proceeding to checkout.
            </p>
            <div>
              <Link to="/store" className="btn btn-primary btn-lg fw-semibold">
                Return to Store
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-light min-vh-100">
      <CustomerNavbar />

      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mb-0">Checkout</h2>
          <Link to="/store/cart" className="text-decoration-none text-muted">
            <i className="bi bi-arrow-left me-1"></i> Back to Cart
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            {/* Shipping & Payment Details */}
            <div className="col-lg-7">
              {/* Shipping Details */}
              <div className="card border-0 shadow-sm p-4 mb-4">
                <h5 className="fw-bold mb-3">Shipping Information</h5>
                
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      placeholder="e.g. Aarav Patel"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="aarav@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      placeholder="+977 9800000000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">Street Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      placeholder="123 Main Street, Apt 4B"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">City</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      placeholder="Kathmandu"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">ZIP / Postal Code</label>
                    <input
                      type="text"
                      className="form-control"
                      name="zipCode"
                      placeholder="44600"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="card border-0 shadow-sm p-4">
                <h5 className="fw-bold mb-3">Payment Method</h5>

                <div className="form-check mb-3 p-3 border rounded">
                  <input
                    className="form-check-input ms-1 me-3"
                    type="radio"
                    name="paymentMethod"
                    id="cod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label fw-semibold" htmlFor="cod">
                    <i className="bi bi-cash-stack me-2 text-success"></i>
                    Cash on Delivery (COD)
                  </label>
                </div>

                <div className="form-check p-3 border rounded">
                  <input
                    className="form-check-input ms-1 me-3"
                    type="radio"
                    name="paymentMethod"
                    id="card"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label fw-semibold" htmlFor="card">
                    <i className="bi bi-credit-card me-2 text-primary"></i>
                    Credit / Debit Card (Online Payment)
                  </label>
                </div>
              </div>
            </div>

            {/* Order Summary Side Panel */}
            <div className="col-lg-5">
              <div className="card border-0 shadow-sm p-4">
                <h5 className="fw-bold mb-3">Order Summary</h5>

                <div className="d-flex flex-column gap-3 mb-3 max-vh-50 overflow-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="rounded object-fit-cover"
                          style={{ width: '50px', height: '50px' }}
                        />
                        <div>
                          <h6 className="fw-bold mb-0 small">{item.name}</h6>
                          <span className="text-muted small">Qty: {item.quantity || 1}</span>
                        </div>
                      </div>
                      <span className="fw-bold small">
                        ${((item.price * (item.quantity || 1))).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Subtotal</span>
                  <span className="fw-semibold">${subtotal.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Shipping</span>
                  <span className="fw-semibold">${shipping.toFixed(2)}</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-4">
                  <span className="fw-bold fs-5">Total</span>
                  <span className="fw-bold fs-5 text-primary">${total.toFixed(2)}</span>
                </div>

                <button type="submit" className="btn btn-success btn-lg w-100 fw-bold">
                  Place Order <i className="bi bi-check-circle ms-1"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
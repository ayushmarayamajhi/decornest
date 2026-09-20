import React from 'react'
import CustomerNavbar from '../../components/CustomerNavbar'
import { Link } from 'react-router-dom'

function CustomerCart() {
  const cartItems = [
    { id: 1, name: 'Nordic Ceramic Vase', price: 45.00, quantity: 1, image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=500&auto=format&fit=crop&q=60' },
    { id: 2, name: 'Modern Brass Table Lamp', price: 78.00, quantity: 1, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=60' },
  ]

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="bg-light min-vh-100">
      <CustomerNavbar />
      <div className="container py-5">
        <h2 className="fw-bold mb-4"><i className="bi bi-cart3 me-2"></i>Your Shopping Cart</h2>
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm p-3">
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex align-items-center justify-content-between border-bottom py-3">
                  <div className="d-flex align-items-center gap-3">
                    <img src={item.image} alt={item.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
                    <div>
                      <h6 className="fw-bold mb-1">{item.name}</h6>
                      <span className="text-muted">${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <input type="number" defaultValue={item.quantity} min="1" className="form-control text-center" style={{ width: '60px' }} />
                    <button className="btn btn-outline-danger btn-sm"><i className="bi bi-trash"></i></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm p-4">
              <h5 className="fw-bold mb-3">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span className="text-success fw-bold">FREE</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fs-5 fw-bold mb-4">
                <span>Total</span>
                <span className="text-primary">${subtotal.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary w-100 py-2 fw-bold">Proceed to Checkout</button>
              <Link to="/store" className="btn btn-link text-decoration-none w-100 text-center mt-2">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerCart
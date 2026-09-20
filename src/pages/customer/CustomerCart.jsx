import React from 'react'
import CustomerNavbar from '../../components/CustomerNavbar'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

function CustomerCart() {
  const { cartItems, removeFromCart, updateQuantity, cartSubtotal } = useCart()

  return (
    <div className="bg-light min-vh-100">
      <CustomerNavbar />
      <div className="container py-5">
        <h2 className="fw-bold mb-4"><i className="bi bi-cart3 me-2"></i>Your Shopping Cart</h2>
        
        {cartItems.length === 0 ? (
          <div className="card border-0 shadow-sm p-5 text-center">
            <h4>Your cart is currently empty</h4>
            <p className="text-muted">Explore our marketplace to add beautiful decor to your home.</p>
            <div>
              <Link to="/store" className="btn btn-primary fw-bold mt-2">Start Shopping</Link>
            </div>
          </div>
        ) : (
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm p-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="d-flex align-items-center justify-content-between border-bottom py-3">
                    <div className="d-flex align-items-center gap-3">
                      <img src={item.image} alt={item.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
                      <div>
                        <h6 className="fw-bold mb-1">{item.name}</h6>
                        <span className="text-muted">${Number(item.price).toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <input 
                        type="number" 
                        value={item.quantity} 
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        min="1" 
                        className="form-control text-center" 
                        style={{ width: '65px' }} 
                      />
                      <button 
                        onClick={() => removeFromCart(item.id)} 
                        className="btn btn-outline-danger btn-sm"
                        title="Remove item"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
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
                  <span>${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Shipping</span>
                  <span className="text-success fw-bold">FREE</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fs-5 fw-bold mb-4">
                  <span>Total</span>
                  <span className="text-primary">${cartSubtotal.toFixed(2)}</span>
                </div>
                <Link to="/store/checkout" className="btn btn-primary w-100 py-2 fw-bold text-center text-decoration-none">
                  Proceed to Checkout
                </Link>
                <Link to="/store" className="btn btn-link text-decoration-none w-100 text-center mt-2">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomerCart
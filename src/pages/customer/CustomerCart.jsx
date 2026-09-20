import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CustomerNavbar from '../../components/CustomerNavbar'
import { useCart } from '../../context/CartContext'

export default function CustomerCart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart()
  const navigate = useNavigate()

  // Calculate Subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  )
  const shipping = subtotal > 0 ? 15.0 : 0.0
  const total = subtotal + shipping

  return (
    <div className="bg-light min-vh-100">
      <CustomerNavbar />

      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mb-0">Your Shopping Cart</h2>
          <Link to="/store" className="text-decoration-none text-muted">
            <i className="bi bi-arrow-left me-1"></i> Continue Shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="card border-0 shadow-sm p-5 text-center my-4">
            <div className="mb-3 text-secondary">
              <i className="bi bi-cart-x display-1"></i>
            </div>
            <h4 className="fw-bold">Your cart is currently empty</h4>
            <p className="text-muted mb-4">
              Looks like you haven't added any decor items to your cart yet.
            </p>
            <div>
              <Link to="/store" className="btn btn-primary btn-lg px-4 fw-semibold">
                Explore Products
              </Link>
            </div>
          </div>
        ) : (
          /* Cart Items & Summary Grid */
          <div className="row g-4">
            {/* Left: Items List */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm p-4">
                <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
                  <span className="fw-bold text-muted">Item Details</span>
                  <button
                    className="btn btn-link text-danger text-decoration-none p-0 small"
                    onClick={clearCart}
                  >
                    Clear Entire Cart
                  </button>
                </div>

                <div className="d-flex flex-column gap-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between border-bottom pb-3 gap-3"
                    >
                      {/* Product Image & Info */}
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="rounded object-fit-cover"
                          style={{ width: '80px', height: '80px' }}
                        />
                        <div>
                          <h6 className="fw-bold mb-1">{item.name}</h6>
                          <span className="badge bg-secondary mb-1">
                            {item.category}
                          </span>
                          <div className="text-primary fw-bold">
                            ${item.price.toFixed(2)}
                          </div>
                        </div>
                      </div>

                      {/* Quantity Controls & Total */}
                      <div className="d-flex align-items-center justify-content-between justify-content-sm-end gap-3 ms-sm-auto">
                        <div className="input-group" style={{ width: '110px' }}>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, (item.quantity || 1) - 1)
                            }
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="form-control form-control-sm text-center bg-white"
                            value={item.quantity || 1}
                            readOnly
                          />
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, (item.quantity || 1) + 1)
                            }
                          >
                            +
                          </button>
                        </div>

                        <div
                          className="fw-bold text-end"
                          style={{ minWidth: '70px' }}
                        >
                          ${((item.price * (item.quantity || 1))).toFixed(2)}
                        </div>

                        <button
                          className="btn btn-outline-danger btn-sm border-0"
                          title="Remove item"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm p-4">
                <h5 className="fw-bold mb-3">Order Summary</h5>

                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Subtotal</span>
                  <span className="fw-semibold">${subtotal.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Flat Shipping</span>
                  <span className="fw-semibold">${shipping.toFixed(2)}</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-4">
                  <span className="fw-bold fs-5">Total</span>
                  <span className="fw-bold fs-5 text-primary">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <button
                  className="btn btn-primary btn-lg w-100 fw-bold"
                  onClick={() => navigate('/store/checkout')}
                >
                  Proceed to Checkout <i className="bi bi-arrow-right ms-1"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
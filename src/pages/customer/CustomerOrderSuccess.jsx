import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CustomerNavbar from '../../components/CustomerNavbar'

export default function CustomerOrderSuccess() {
  const [orderDetails, setOrderDetails] = useState(null)

  useEffect(() => {
    const savedOrder = localStorage.getItem('decorNest_last_order')
    if (savedOrder) {
      setOrderDetails(JSON.parse(savedOrder))
    }
  }, [])

  return (
    <div className="bg-light min-vh-100">
      <CustomerNavbar />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm p-4 p-md-5 text-center mb-4">
              <div className="mb-3 text-success">
                <i className="bi bi-check-circle-fill display-1"></i>
              </div>
              <h2 className="fw-bold mb-2">Order Placed Successfully!</h2>
              <p className="text-muted mb-4">
                Thank you for shopping with DecorNest. We have received your order and are preparing it for dispatch.
              </p>

              {orderDetails && (
                <div className="badge bg-light text-dark fs-6 border py-2 px-3 align-self-center mb-4">
                  Order ID: <span className="fw-bold text-primary">{orderDetails.orderId}</span>
                </div>
              )}

              <div>
                <Link to="/store" className="btn btn-primary btn-lg px-4 fw-semibold">
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Receipt Summary Card */}
            {orderDetails && (
              <div className="card border-0 shadow-sm p-4">
                <h5 className="fw-bold mb-3 border-bottom pb-2">Order Summary</h5>

                <div className="row mb-4">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <h6 className="fw-bold text-muted small text-uppercase mb-1">
                      Shipping Address
                    </h6>
                    <p className="mb-0 fw-semibold">{orderDetails.shippingAddress?.fullName}</p>
                    <p className="mb-0 text-secondary small">{orderDetails.shippingAddress?.address}</p>
                    <p className="mb-0 text-secondary small">
                      {orderDetails.shippingAddress?.city}, {orderDetails.shippingAddress?.zipCode}
                    </p>
                    <p className="mb-0 text-secondary small">Phone: {orderDetails.shippingAddress?.phone}</p>
                  </div>

                  <div className="col-sm-6 text-sm-end">
                    <h6 className="fw-bold text-muted small text-uppercase mb-1">
                      Payment Info
                    </h6>
                    <p className="mb-0 fw-semibold text-capitalize">
                      Method: {orderDetails.shippingAddress?.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Card Payment'}
                    </p>
                    <p className="mb-0 text-secondary small">Date: {orderDetails.date}</p>
                  </div>
                </div>

                <h6 className="fw-bold text-muted small text-uppercase mb-2">Items Ordered</h6>
                <div className="d-flex flex-column gap-3 mb-3">
                  {orderDetails.items?.map((item) => (
                    <div key={item.id} className="d-flex align-items-center justify-content-between border-bottom pb-2">
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="rounded object-fit-cover"
                          style={{ width: '45px', height: '45px' }}
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

                <div className="d-flex justify-content-between text-muted small mb-1">
                  <span>Subtotal</span>
                  <span>${orderDetails.subtotal?.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between text-muted small mb-2">
                  <span>Shipping</span>
                  <span>${orderDetails.shipping?.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between fw-bold fs-5 border-top pt-2">
                  <span>Total Amount Paid</span>
                  <span className="text-primary">${orderDetails.total?.toFixed(2)}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
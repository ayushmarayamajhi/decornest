import React, { useState } from 'react'

function MerchantOrders() {
  const [orders, setOrders] = useState([
    { id: 'ORD-9821', customer: 'Sujan Shrestha', items: 'Nordic Ceramic Vase (x1)', total: 45.00, status: 'Pending', date: '2026-03-28' },
    { id: 'ORD-9820', customer: 'Aisha Khan', items: 'Modern Brass Table Lamp (x2)', total: 156.00, status: 'Processing', date: '2026-03-27' },
    { id: 'ORD-9818', customer: 'Rohan Sharma', items: 'Minimalist Wall Clock (x1)', total: 35.00, status: 'Shipped', date: '2026-03-25' }
  ])

  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o))
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Pending': return 'bg-warning text-dark'
      case 'Processing': return 'bg-info text-dark'
      case 'Shipped': return 'bg-primary'
      case 'Delivered': return 'bg-success'
      default: return 'bg-secondary'
    }
  }

  return (
    <div className="container-fluid p-4">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Customer Orders</h2>
        <p className="text-muted mb-0">Track customer orders and update dispatch status</p>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Items Ordered</th>
                  <th>Total</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Update Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id}>
                    <td className="fw-bold">{o.id}</td>
                    <td>{o.customer}</td>
                    <td>{o.items}</td>
                    <td className="fw-semibold">${o.total.toFixed(2)}</td>
                    <td className="text-muted small">{o.date}</td>
                    <td>
                      <span className={`badge ${getStatusBadge(o.status)}`}>
                        {o.status}
                      </span>
                    </td>
                    <td>
                      <select 
                        value={o.status} 
                        onChange={(e) => handleStatusChange(o.id, e.target.value)}
                        className="form-select form-select-sm" 
                        style={{ width: '130px' }}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MerchantOrders
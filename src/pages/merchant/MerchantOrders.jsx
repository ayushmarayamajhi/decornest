import React from 'react'

function MerchantOrders() {
  const orders = [
    { id: 'ORD-1001', customer: 'Sarah Jenkins', total: '$265.00', date: '2026-09-18', status: 'Pending' },
    { id: 'ORD-1002', customer: 'David Miller', total: '$45.00', date: '2026-09-19', status: 'Shipped' },
    { id: 'ORD-1003', customer: 'Emma Watson', total: '$120.00', date: '2026-09-20', status: 'Delivered' },
  ]

  return (
    <div className="container-fluid">
      <h2 className="h3 text-success mb-4"><i className="bi bi-bag-check me-2"></i>Store Orders</h2>
      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="fw-bold">{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.total}</td>
                  <td>{order.date}</td>
                  <td>
                    <span className={`badge ${
                      order.status === 'Pending' ? 'bg-warning text-dark' : order.status === 'Shipped' ? 'bg-info text-dark' : 'bg-success'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary"><i className="bi bi-eye"></i> View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MerchantOrders
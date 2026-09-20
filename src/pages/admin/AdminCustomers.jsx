import React from 'react'

function AdminCustomers() {
  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', orders: 5, status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', orders: 12, status: 'Active' },
    { id: 3, name: 'Robert Brown', email: 'robert@example.com', orders: 0, status: 'Inactive' },
  ]

  return (
    <div className="container-fluid">
      <h2 className="h3 mb-4"><i className="bi bi-people me-2"></i>Customer Management</h2>
      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Total Orders</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id}>
                  <td>#{c.id}</td>
                  <td className="fw-semibold">{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.orders}</td>
                  <td>
                    <span className={`badge ${c.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
                      {c.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2">View</button>
                    <button className="btn btn-sm btn-outline-danger">Block</button>
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

export default AdminCustomers
import React, { useState } from 'react'

export default function AdminMerchants() {
  const [merchants, setMerchants] = useState([
    { id: 1, name: 'Artisan Decor Co.', email: 'vendor@artisandecor.com', status: 'Approved', joined: '2026-08-10', products: 12 },
    { id: 2, name: 'Luxe Lighting Studios', email: 'contact@luxelighting.com', status: 'Approved', joined: '2026-08-22', products: 8 },
    { id: 3, name: 'Urban Woodcrafts', email: 'hello@urbanwood.com', status: 'Pending', joined: '2026-09-18', products: 0 }
  ])

  const toggleStatus = (id) => {
    setMerchants(
      merchants.map((m) => {
        if (m.id === id) {
          const nextStatus = m.status === 'Approved' ? 'Suspended' : 'Approved'
          return { ...m, status: nextStatus }
        }
        return m
      })
    )
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this merchant account?')) {
      setMerchants(merchants.filter((m) => m.id !== id))
    }
  }

  return (
    <div className="container-fluid py-4">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Merchant Management</h2>
        <p className="text-muted small mb-0">Approve seller registrations and control merchant permissions.</p>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Merchant Name</th>
                <th>Email</th>
                <th>Joined Date</th>
                <th>Products</th>
                <th>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {merchants.map((m) => (
                <tr key={m.id}>
                  <td className="fw-bold">{m.name}</td>
                  <td className="text-muted small">{m.email}</td>
                  <td className="text-muted small">{m.joined}</td>
                  <td>{m.products} active</td>
                  <td>
                    <span className={`badge ${m.status === 'Approved' ? 'bg-success' : m.status === 'Pending' ? 'bg-warning text-dark' : 'bg-danger'}`}>
                      {m.status}
                    </span>
                  </td>
                  <td className="text-end">
                    <button
                      className={`btn btn-sm me-2 ${m.status === 'Approved' ? 'btn-outline-warning' : 'btn-outline-success'}`}
                      onClick={() => toggleStatus(m.id)}
                    >
                      {m.status === 'Approved' ? 'Suspend' : 'Approve'}
                    </button>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(m.id)}>
                      <i className="bi bi-trash"></i>
                    </button>
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
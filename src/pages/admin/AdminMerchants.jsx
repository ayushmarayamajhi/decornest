import React, { useState } from 'react'

function AdminMerchants() {
  const [merchants, setMerchants] = useState([
    { id: 1, name: 'Himalayan Woodcrafts', owner: 'Ramesh Adhikari', email: 'ramesh@woodcrafts.np', status: 'Approved', joined: '2026-01-12' },
    { id: 2, name: 'Minimalist Living Co.', owner: 'Saraswati Thapa', email: 'saraswati@minimalist.com', status: 'Pending', joined: '2026-03-18' },
    { id: 3, name: 'Artisan Clay Studio', owner: 'Pooja Superior', email: 'pooja@claystudio.com', status: 'Pending', joined: '2026-03-24' }
  ])

  const handleStatusChange = (id, newStatus) => {
    setMerchants(merchants.map(m => m.id === id ? { ...m, status: newStatus } : m))
  }

  return (
    <div className="container-fluid p-4">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Merchant Approvals & Management</h2>
        <p className="text-muted mb-0">Review seller registration requests and manage active store status</p>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Store Name</th>
                  <th>Owner</th>
                  <th>Email</th>
                  <th>Joined Date</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {merchants.map((m) => (
                  <tr key={m.id}>
                    <td className="fw-bold">{m.name}</td>
                    <td>{m.owner}</td>
                    <td className="text-muted">{m.email}</td>
                    <td className="small">{m.joined}</td>
                    <td>
                      <span className={`badge ${m.status === 'Approved' ? 'bg-success' : m.status === 'Rejected' ? 'bg-danger' : 'bg-warning text-dark'}`}>
                        {m.status}
                      </span>
                    </td>
                    <td className="text-end">
                      {m.status === 'Pending' ? (
                        <div className="btn-group btn-group-sm">
                          <button 
                            onClick={() => handleStatusChange(m.id, 'Approved')} 
                            className="btn btn-outline-success"
                          >
                            Approve
                          </button>
                          <button 
                            onClick={() => handleStatusChange(m.id, 'Rejected')} 
                            className="btn btn-outline-danger"
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <button 
                          onClick={() => handleStatusChange(m.id, m.status === 'Approved' ? 'Rejected' : 'Approved')} 
                          className="btn btn-outline-secondary btn-sm"
                        >
                          {m.status === 'Approved' ? 'Revoke Access' : 'Re-Approve'}
                        </button>
                      )}
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

export default AdminMerchants
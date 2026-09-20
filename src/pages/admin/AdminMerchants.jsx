import React from 'react'

function AdminMerchants() {
  const merchants = [
    { id: 1, storeName: 'Artisan Home Decor', owner: 'Alice Johnson', status: 'Approved' },
    { id: 2, storeName: 'Urban Lighting Co.', owner: 'Bob Williams', status: 'Pending Approval' },
  ]

  return (
    <div className="container-fluid">
      <h2 className="h3 mb-4"><i className="bi bi-shop me-2"></i>Merchant Approvals & Management</h2>
      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Store Name</th>
                <th>Owner</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {merchants.map((m) => (
                <tr key={m.id}>
                  <td>#{m.id}</td>
                  <td className="fw-semibold">{m.storeName}</td>
                  <td>{m.owner}</td>
                  <td>
                    <span className={`badge ${m.status === 'Approved' ? 'bg-success' : 'bg-warning text-dark'}`}>
                      {m.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-success me-2">Approve</button>
                    <button className="btn btn-sm btn-outline-danger">Reject</button>
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

export default AdminMerchants
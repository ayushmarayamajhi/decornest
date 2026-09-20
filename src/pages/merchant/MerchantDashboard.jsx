import React from 'react'

function MerchantDashboard() {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm border-0 p-4">
        <h1 className="h3 text-success"><i className="bi bi-shop me-2"></i>Merchant Dashboard</h1>
        <p className="text-muted">Manage your store products and orders.</p>
        <button className="btn btn-success me-2">
          <i className="bi bi-plus-circle me-1"></i> Add New Product
        </button>
      </div>
    </div>
  )
}

export default MerchantDashboard
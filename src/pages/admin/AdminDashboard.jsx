import React from 'react'

function AdminDashboard() {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm border-0 p-4">
        <h1 className="h3 text-primary"><i className="bi bi-speedometer2 me-2"></i>Admin Dashboard</h1>
        <p className="text-muted">Welcome to the DecorNest Admin Panel.</p>
        <div className="row g-3 mt-2">
          <div className="col-md-4">
            <div className="card bg-primary text-white p-3">
              <h5>Total Merchants</h5>
              <h2>12</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-success text-white p-3">
              <h5>Total Products</h5>
              <h2>148</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-warning text-dark p-3">
              <h5>Pending Orders</h5>
              <h2>5</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
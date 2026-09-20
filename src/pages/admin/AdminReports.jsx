import React from 'react'

function AdminReports() {
  return (
    <div className="container-fluid">
      <h2 className="h3 mb-4"><i className="bi bi-bar-chart-line me-2"></i>Platform Analytics & Reports</h2>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-3">
            <h5>Total Revenue</h5>
            <h3>$48,920.00</h3>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-3">
            <h5>Active Stores</h5>
            <h3>24</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminReports
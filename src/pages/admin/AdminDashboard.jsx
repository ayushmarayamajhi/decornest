import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Revenue', value: '$12,450.00', icon: 'bi-currency-dollar', color: 'bg-primary' },
    { title: 'Active Merchants', value: '14', icon: 'bi-shop', color: 'bg-success' },
    { title: 'Total Orders', value: '182', icon: 'bi-bag-check', color: 'bg-info' },
    { title: 'System Status', value: 'Healthy', icon: 'bi-check-circle', color: 'bg-warning' }
  ]

  return (
    <div className="container-fluid py-4">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Admin Dashboard</h2>
        <p className="text-muted small mb-0">Overview of site performance, merchants, and system statistics.</p>
      </div>

      {/* KPI Stats Grid */}
      <div className="row g-4 mb-5">
        {stats.map((item, idx) => (
          <div key={idx} className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <div className="text-muted small fw-semibold">{item.title}</div>
                  <div className="fs-3 fw-bold mt-1">{item.value}</div>
                </div>
                <div className={`rounded-circle text-white p-3 d-flex align-items-center justify-content-center ${item.color}`} style={{ width: '50px', height: '50px' }}>
                  <i className={`bi ${item.icon} fs-4`}></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Quick Links */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-4">
            <h5 className="fw-bold mb-2">Merchant Operations</h5>
            <p className="text-muted small mb-3">Review pending seller applications, approve new stores, or suspend accounts.</p>
            <Link to="/admin/merchants" className="btn btn-outline-primary fw-semibold">
              Manage Merchants <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-4">
            <h5 className="fw-bold mb-2">Category Controls</h5>
            <p className="text-muted small mb-3">Add new product categories or restructure store organization.</p>
            <Link to="/admin/categories" className="btn btn-outline-primary fw-semibold">
              Manage Categories <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
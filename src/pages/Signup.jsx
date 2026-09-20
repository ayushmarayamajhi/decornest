import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()
  const [accountType, setAccountType] = useState('customer')
  const [formData, setFormData] = useState({
    fullName: '',
    storeName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    if (accountType === 'merchant') {
      alert('Merchant account application submitted for admin approval!')
      navigate('/merchant/dashboard')
    } else {
      navigate('/store')
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="container" style={{ maxWidth: '520px' }}>
        <div className="card border-0 shadow-lg p-4 rounded-4">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary mb-1">🏠 DecorNest</h2>
            <p className="text-muted">Create a new account to get started</p>
          </div>

          {/* Account Type Toggle */}
          <div className="row g-2 mb-4">
            <div className="col-6">
              <div 
                className={`card text-center p-3 cursor-pointer ${accountType === 'customer' ? 'border-primary bg-primary bg-opacity-10' : 'border-light-subtle'}`}
                style={{ cursor: 'pointer' }}
                onClick={() => setAccountType('customer')}
              >
                <i className="bi bi-bag-check fs-3 text-primary mb-1"></i>
                <div className="fw-bold small">Customer</div>
              </div>
            </div>
            <div className="col-6">
              <div 
                className={`card text-center p-3 cursor-pointer ${accountType === 'merchant' ? 'border-primary bg-primary bg-opacity-10' : 'border-light-subtle'}`}
                style={{ cursor: 'pointer' }}
                onClick={() => setAccountType('merchant')}
              >
                <i className="bi bi-shop fs-3 text-primary mb-1"></i>
                <div className="fw-bold small">Merchant Seller</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="form-control"
                placeholder="Jane Doe"
                required
              />
            </div>

            {accountType === 'merchant' && (
              <div className="mb-3">
                <label className="form-label fw-semibold">Store / Brand Name</label>
                <input
                  type="text"
                  name="storeName"
                  value={formData.storeName}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g. Artisan Woodworks"
                  required
                />
              </div>
            )}

            <div className="mb-3">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="jane@example.com"
                required
              />
            </div>

            <div className="row g-2 mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2 fw-bold fs-5 mt-2">
              Register as {accountType === 'merchant' ? 'Merchant' : 'Customer'}
            </button>
          </form>

          <div className="text-center mt-4 pt-2 border-top">
            <p className="text-muted small mb-0">
              Already have an account?{' '}
              <Link to="/login" className="fw-bold text-decoration-none">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [role, setRole] = useState('customer')
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Redirect based on selected role
    if (role === 'admin') {
      navigate('/admin/dashboard')
    } else if (role === 'merchant') {
      navigate('/merchant/dashboard')
    } else {
      navigate('/store')
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="container" style={{ maxWidth: '480px' }}>
        <div className="card border-0 shadow-lg p-4 rounded-4">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary mb-1">🏠 DecorNest</h2>
            <p className="text-muted">Welcome back! Sign in to continue</p>
          </div>

          {/* Role Selector Tabs */}
          <div className="btn-group w-100 mb-4" role="group">
            <button
              type="button"
              className={`btn btn-sm ${role === 'customer' ? 'btn-primary fw-bold' : 'btn-outline-primary'}`}
              onClick={() => setRole('customer')}
            >
              Customer
            </button>
            <button
              type="button"
              className={`btn btn-sm ${role === 'merchant' ? 'btn-primary fw-bold' : 'btn-outline-primary'}`}
              onClick={() => setRole('merchant')}
            >
              Merchant
            </button>
            <button
              type="button"
              className={`btn btn-sm ${role === 'admin' ? 'btn-primary fw-bold' : 'btn-outline-primary'}`}
              onClick={() => setRole('admin')}
            >
              Admin
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <label className="form-label fw-semibold mb-0">Password</label>
                <a href="#forgot" className="small text-decoration-none text-muted">Forgot?</a>
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control mt-1"
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2 fw-bold fs-5 mt-2">
              Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          </form>

          <div className="text-center mt-4 pt-2 border-top">
            <p className="text-muted small mb-0">
              Don't have an account?{' '}
              <Link to="/signup" className="fw-bold text-decoration-none">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
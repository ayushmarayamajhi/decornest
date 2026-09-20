import React, { useState, useEffect } from 'react'

const DEFAULT_CATEGORIES = [
  { id: 1, name: 'Vases', itemCount: 14, status: 'Active' },
  { id: 2, name: 'Furniture', itemCount: 8, status: 'Active' },
  { id: 3, name: 'Decor', itemCount: 22, status: 'Active' },
  { id: 4, name: 'Lighting', itemCount: 6, status: 'Active' }
]

export default function AdminCategories() {
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem('decorNest_categories')
    return saved ? JSON.parse(saved) : DEFAULT_CATEGORIES
  })

  const [newCatName, setNewCatName] = useState('')

  useEffect(() => {
    localStorage.setItem('decorNest_categories', JSON.stringify(categories))
  }, [categories])

  const handleAddCategory = (e) => {
    e.preventDefault()
    if (!newCatName.trim()) return

    const newCat = {
      id: Date.now(),
      name: newCatName.trim(),
      itemCount: 0,
      status: 'Active'
    }

    setCategories([...categories, newCat])
    setNewCatName('')
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter((c) => c.id !== id))
    }
  }

  return (
    <div className="container-fluid py-4">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Category Management</h2>
        <p className="text-muted small mb-0">Create and organize product categories for store search filters.</p>
      </div>

      <div className="row g-4">
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm p-4">
            <h5 className="fw-bold mb-3">Add Category</h5>
            <form onSubmit={handleAddCategory}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Wall Art"
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 fw-bold">
                <i className="bi bi-plus-lg me-1"></i> Add Category
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Category Name</th>
                    <th>Linked Products</th>
                    <th>Status</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((cat) => (
                    <tr key={cat.id}>
                      <td className="fw-bold">{cat.name}</td>
                      <td>{cat.itemCount} items</td>
                      <td>
                        <span className="badge bg-success">{cat.status}</span>
                      </td>
                      <td className="text-end">
                        <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(cat.id)}>
                          <i className="bi bi-trash"></i> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
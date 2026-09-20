import React, { useState } from 'react'

function AdminCategories() {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Decor', slug: 'decor', productCount: 42, status: 'Active' },
    { id: 2, name: 'Furniture', slug: 'furniture', productCount: 18, status: 'Active' },
    { id: 3, name: 'Lighting', slug: 'lighting', productCount: 25, status: 'Active' },
    { id: 4, name: 'Wall Art', slug: 'wall-art', productCount: 12, status: 'Active' }
  ])

  const [catName, setCatName] = useState('')

  const handleAddCategory = (e) => {
    e.preventDefault()
    if (!catName.trim()) return

    const newCategory = {
      id: Date.now(),
      name: catName,
      slug: catName.toLowerCase().replace(/\s+/g, '-'),
      productCount: 0,
      status: 'Active'
    }

    setCategories([...categories, newCategory])
    setCatName('')

    // Close Bootstrap Modal
    const modalElement = document.getElementById('addCategoryModal')
    const modal = window.bootstrap?.Modal.getInstance(modalElement)
    modal?.hide()
  }

  const handleDelete = (id) => {
    setCategories(categories.filter(c => c.id !== id))
  }

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Product Categories</h2>
          <p className="text-muted mb-0">Organize and manage platform taxonomy</p>
        </div>
        <button 
          className="btn btn-primary fw-bold"
          data-bs-toggle="modal"
          data-bs-target="#addCategoryModal"
        >
          <i className="bi bi-plus-lg me-2"></i>Add Category
        </button>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Category Name</th>
                  <th>URL Slug</th>
                  <th>Total Products</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c) => (
                  <tr key={c.id}>
                    <td className="fw-bold">{c.name}</td>
                    <td className="text-muted font-monospace">{c.slug}</td>
                    <td>{c.productCount} items</td>
                    <td><span className="badge bg-success">{c.status}</span></td>
                    <td className="text-end">
                      <button 
                        onClick={() => handleDelete(c.id)} 
                        className="btn btn-outline-danger btn-sm"
                        title="Delete Category"
                      >
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

      {/* Add Category Modal */}
      <div className="modal fade" id="addCategoryModal" tabIndex="-1" aria-labelledby="addCategoryModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="addCategoryModalLabel">Add New Category</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleAddCategory}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Category Name</label>
                  <input 
                    type="text" 
                    value={catName} 
                    onChange={(e) => setCatName(e.target.value)} 
                    className="form-control" 
                    placeholder="e.g. Rugs & Textiles" 
                    required 
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary fw-bold">Save Category</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminCategories
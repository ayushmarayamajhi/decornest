import React, { useState } from 'react'

function MerchantProducts() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Nordic Ceramic Vase', category: 'Decor', price: 45.00, stock: 12, status: 'Active' },
    { id: 2, name: 'Modern Brass Table Lamp', category: 'Lighting', price: 78.00, stock: 8, status: 'Active' },
    { id: 3, name: 'Minimalist Wall Clock', category: 'Wall Art', price: 35.00, stock: 0, status: 'Out of Stock' }
  ])

  const [formData, setFormData] = useState({
    name: '',
    category: 'Decor',
    price: '',
    stock: '',
    description: '',
    image: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleAddProduct = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.price || !formData.stock) return

    const newProd = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      status: parseInt(formData.stock) > 0 ? 'Active' : 'Out of Stock'
    }

    setProducts([newProd, ...products])
    setFormData({ name: '', category: 'Decor', price: '', stock: '', description: '', image: '' })

    // Close Bootstrap Modal programmatically
    const modalElement = document.getElementById('addProductModal')
    const modal = window.bootstrap?.Modal.getInstance(modalElement)
    modal?.hide()
  }

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id))
  }

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Product Inventory</h2>
          <p className="text-muted mb-0">Manage your product catalog and current stock levels</p>
        </div>
        <button 
          className="btn btn-primary fw-bold"
          data-bs-toggle="modal"
          data-bs-target="#addProductModal"
        >
          <i className="bi bi-plus-lg me-2"></i>Add New Product
        </button>
      </div>

      {/* Products Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id}>
                    <td className="fw-semibold">{p.name}</td>
                    <td><span className="badge bg-secondary">{p.category}</span></td>
                    <td>${p.price.toFixed(2)}</td>
                    <td>{p.stock} units</td>
                    <td>
                      <span className={`badge ${p.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="text-end">
                      <button 
                        onClick={() => handleDelete(p.id)} 
                        className="btn btn-outline-danger btn-sm"
                        title="Delete Product"
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

      {/* Add Product Modal */}
      <div className="modal fade" id="addProductModal" tabIndex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="addProductModalLabel">Add New Product</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleAddProduct}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Product Title</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="e.g. Handwoven Tapestry" 
                    required 
                  />
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Category</label>
                    <select name="category" value={formData.category} onChange={handleChange} className="form-select">
                      <option value="Decor">Decor</option>
                      <option value="Furniture">Furniture</option>
                      <option value="Lighting">Lighting</option>
                      <option value="Wall Art">Wall Art</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Price ($)</label>
                    <input 
                      type="number" 
                      step="0.01" 
                      name="price" 
                      value={formData.price} 
                      onChange={handleChange} 
                      className="form-control" 
                      placeholder="49.99" 
                      required 
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Stock Quantity</label>
                  <input 
                    type="number" 
                    name="stock" 
                    value={formData.stock} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="15" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Image URL</label>
                  <input 
                    type="url" 
                    name="image" 
                    value={formData.image} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="https://images.unsplash.com/..." 
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary fw-bold">Save Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MerchantProducts
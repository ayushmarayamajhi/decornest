import React, { useState } from 'react'

function MerchantProducts() {
  // Dummy data representing home decor products added by this merchant
  const [products, setProducts] = useState([
    { id: 1, name: 'Nordic Ceramic Vase', category: 'Decor', price: 45.00, stock: 12, status: 'Active' },
    { id: 2, name: 'Velvet Accent Chair', category: 'Furniture', price: 220.00, stock: 5, status: 'Active' },
    { id: 3, name: 'Minimalist Wall Clock', category: 'Wall Art', price: 35.00, stock: 0, status: 'Out of Stock' },
  ])

  // State for form inputs
  const [newProduct, setNewProduct] = useState({ name: '', category: 'Decor', price: '', stock: '' })

  const handleAddProduct = (e) => {
    e.preventDefault()
    if (!newProduct.name || !newProduct.price) return

    const productToAdd = {
      id: Date.now(),
      name: newProduct.name,
      category: newProduct.category,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock) || 0,
      status: 'Active'
    }

    setProducts([...products, productToAdd])
    setNewProduct({ name: '', category: 'Decor', price: '', stock: '' })
  }

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h3 text-success"><i className="bi bi-box-seam me-2"></i>My Products</h2>
        <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addProductModal">
          <i className="bi bi-plus-lg me-1"></i> Add New Product
        </button>
      </div>

      {/* Products Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock Quantity</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id}>
                  <td className="fw-semibold">{item.name}</td>
                  <td><span className="badge bg-secondary">{item.category}</span></td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.stock} pcs</td>
                  <td>
                    <span className={`badge ${item.stock > 0 ? 'bg-success' : 'bg-danger'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2"><i className="bi bi-pencil"></i></button>
                    <button className="btn btn-sm btn-outline-danger"><i className="bi bi-trash"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      <div className="modal fade" id="addProductModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title"><i className="bi bi-plus-circle me-2"></i>Add Decor Product</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleAddProduct}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label fw-bold">Product Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. Modern Brass Table Lamp"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Category</label>
                  <select 
                    className="form-select"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  >
                    <option value="Decor">Decor</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Lighting">Lighting</option>
                    <option value="Wall Art">Wall Art</option>
                    <option value="Kitchen">Kitchen</option>
                  </select>
                </div>
                <div className="row g-2">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Price ($)</label>
                    <input 
                      type="number" 
                      step="0.01" 
                      className="form-control" 
                      placeholder="49.99"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                      required 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Initial Stock</label>
                    <input 
                      type="number" 
                      className="form-control" 
                      placeholder="10"
                      value={newProduct.stock}
                      onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                      required 
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Save Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MerchantProducts
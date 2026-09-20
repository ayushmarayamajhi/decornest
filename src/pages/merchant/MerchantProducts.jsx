import React, { useState, useEffect } from 'react'

const DEFAULT_PRODUCTS = [
  { id: 1, name: 'Ceramic Table Vase', category: 'Vases', price: 45.0, rating: 4.8, image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500', description: 'Handcrafted minimalist ceramic vase.' },
  { id: 2, name: 'Modern Table Lamp', category: 'Lighting', price: 85.0, rating: 4.6, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500', description: 'Warm ambient lighting for study desks.' }
]

const DEFAULT_CATEGORIES = [
  { id: 1, name: 'Vases' },
  { id: 2, name: 'Furniture' },
  { id: 3, name: 'Decor' },
  { id: 4, name: 'Lighting' }
]

export default function MerchantProducts() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('decorNest_products')
    return saved ? JSON.parse(saved) : DEFAULT_PRODUCTS
  })

  // Load categories saved by the Admin side
  const [categories, setCategories] = useState(() => {
    const savedCats = localStorage.getItem('decorNest_categories')
    return savedCats ? JSON.parse(savedCats) : DEFAULT_CATEGORIES
  })

  const [showModal, setShowModal] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  
  const [formData, setFormData] = useState({
    name: '',
    category: categories[0]?.name || 'Decor',
    price: '',
    image: '',
    description: ''
  })

  // Re-sync categories whenever localStorage updates
  useEffect(() => {
    const handleStorage = () => {
      const savedCats = localStorage.getItem('decorNest_categories')
      if (savedCats) {
        setCategories(JSON.parse(savedCats))
      }
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  useEffect(() => {
    localStorage.setItem('decorNest_products', JSON.stringify(products))
  }, [products])

  const handleOpenModal = (prod = null) => {
    if (prod) {
      setEditingProduct(prod)
      setFormData(prod)
    } else {
      setEditingProduct(null)
      setFormData({
        name: '',
        category: categories[0]?.name || 'Decor',
        price: '',
        image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500',
        description: ''
      })
    }
    setShowModal(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingProduct) {
      setProducts(products.map((p) => (p.id === editingProduct.id ? { ...p, ...formData, price: parseFloat(formData.price) } : p)))
    } else {
      const newProduct = {
        id: Date.now(),
        ...formData,
        price: parseFloat(formData.price),
        rating: 5.0
      }
      setProducts([...products, newProduct])
    }
    setShowModal(false)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((p) => p.id !== id))
    }
  }

  return (
    <div className="container-fluid py-4">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h2 className="fw-bold mb-1">Product Management</h2>
          <p className="text-muted small mb-0">View, add, and update items in your store listing.</p>
        </div>
        <button className="btn btn-primary fw-bold" onClick={() => handleOpenModal()}>
          <i className="bi bi-plus-lg me-1"></i> Add New Product
        </button>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <img src={p.image} alt={p.name} className="rounded" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                      <div>
                        <div className="fw-bold">{p.name}</div>
                        <div className="text-muted small text-truncate" style={{ maxWidth: '200px' }}>{p.description}</div>
                      </div>
                    </div>
                  </td>
                  <td><span className="badge bg-secondary">{p.category}</span></td>
                  <td className="fw-bold text-primary">${p.price.toFixed(2)}</td>
                  <td><i className="bi bi-star-fill text-warning me-1"></i>{p.rating}</td>
                  <td className="text-end">
                    <button className="btn btn-outline-primary btn-sm me-2" onClick={() => handleOpenModal(p)}>Edit</button>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(p.id)}><i className="bi bi-trash"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dynamic Add / Edit Product Modal */}
      {showModal && (
        <div className="modal show d-block tab-index-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">{editingProduct ? 'Edit Product' : 'Add New Product'}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Product Name</label>
                    <input type="text" className="form-control" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Category</label>
                      {/* DYNAMIC CATEGORIES RENDERED FROM LOCALSTORAGE */}
                      <select className="form-select" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.name}>{cat.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Price ($)</label>
                      <input type="number" step="0.01" className="form-control" required value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Image URL</label>
                    <input type="url" className="form-control" required value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Description</label>
                    <textarea className="form-control" rows="3" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary fw-bold">{editingProduct ? 'Save Changes' : 'Create Product'}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
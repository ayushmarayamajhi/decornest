import React, { useState } from 'react'
import CustomerNavbar from '../../components/CustomerNavbar'
import { Link } from 'react-router-dom'

function CustomerProductDetail() {
  const [quantity, setQuantity] = useState(1)

  const product = {
    id: 1,
    name: 'Nordic Ceramic Vase',
    price: 45.00,
    category: 'Home Decor',
    rating: 4.8,
    reviewsCount: 24,
    description: 'Handcrafted minimalist ceramic vase designed with a smooth matte finish. Perfect for fresh floral arrangements or as a standalone decor piece for contemporary living rooms and dining setups.',
    stock: 12,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&auto=format&fit=crop&q=60',
    merchant: 'ArtisanCraft Studio'
  }

  return (
    <div className="bg-light min-vh-100">
      <CustomerNavbar />
      
      <div className="container py-5">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/store">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/store">Shop</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
          </ol>
        </nav>

        <div className="row g-5 bg-white p-4 rounded-3 shadow-sm mx-0">
          {/* Product Image */}
          <div className="col-md-6 text-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="img-fluid rounded-3 shadow-sm"
              style={{ maxHeight: '420px', width: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Product Information */}
          <div className="col-md-6 d-flex flex-column justify-content-between">
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="badge bg-primary fs-6">{product.category}</span>
                <span className="text-muted small">Sold by <strong>{product.merchant}</strong></span>
              </div>

              <h2 className="fw-bold mb-2">{product.name}</h2>

              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="text-warning fs-5">★ {product.rating}</span>
                <span className="text-muted">({product.reviewsCount} customer reviews)</span>
              </div>

              <h3 className="text-primary fw-bold mb-3">${product.price.toFixed(2)}</h3>

              <p className="text-secondary mb-4">{product.description}</p>

              <div className="mb-3">
                <span className={`badge ${product.stock > 0 ? 'bg-success' : 'bg-danger'}`}>
                  {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Quantity Selector and Action Buttons */}
            <div>
              <div className="d-flex align-items-center gap-3 mb-4">
                <label className="fw-semibold">Quantity:</label>
                <div className="input-group" style={{ width: '130px' }}>
                  <button 
                    className="btn btn-outline-secondary" 
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input 
                    type="text" 
                    className="form-control text-center" 
                    value={quantity} 
                    readOnly 
                  />
                  <button 
                    className="btn btn-outline-secondary" 
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="d-grid gap-2">
                <Link to="/store/cart" className="btn btn-primary btn-lg fw-bold">
                  <i className="bi bi-cart-plus me-2"></i>Add to Cart
                </Link>
                <Link to="/store" className="btn btn-outline-secondary">
                  Back to Marketplace
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerProductDetail
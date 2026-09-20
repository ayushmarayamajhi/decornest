import React, { useState } from 'react'
import CustomerNavbar from '../../components/CustomerNavbar'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

function CustomerHome() {
  const { addToCart } = useCart()

  // Master product list
  const initialProducts = [
    { id: 1, name: 'Nordic Ceramic Vase', price: 45.00, category: 'Decor', image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=500&auto=format&fit=crop&q=60' },
    { id: 2, name: 'Velvet Accent Chair', price: 220.00, category: 'Furniture', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60' },
    { id: 3, name: 'Minimalist Wall Clock', price: 35.00, category: 'Wall Art', image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&auto=format&fit=crop&q=60' },
    { id: 4, name: 'Modern Brass Table Lamp', price: 78.00, category: 'Lighting', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=60' },
  ]

  // Filter & Search states
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortOrder, setSortOrder] = useState('default')

  // Filter logic
  const filteredProducts = initialProducts
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortOrder === 'lowToHigh') return a.price - b.price
      if (sortOrder === 'highToLow') return b.price - a.price
      return 0
    })

  return (
    <div className="bg-light min-vh-100">
      <CustomerNavbar />
      
      {/* Hero Banner */}
      <div 
        className="text-white text-center py-5 mb-5 shadow-sm" 
        style={{ 
          background: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=60")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          minHeight: '340px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white mb-3">Elevate Your Living Space</h1>
          <p className="lead text-light mb-4">Discover unique, handcrafted decor items from verified independent artisans.</p>
          <a href="#marketplace" className="btn btn-primary btn-lg fw-bold px-4 py-2">Explore Marketplace</a>
        </div>
      </div>

      {/* Filter and Search Bar Section */}
      <div id="marketplace" className="container pb-5">
        <div className="row g-3 align-items-center mb-4 bg-white p-3 rounded-3 shadow-sm mx-0">
          {/* Search Input */}
          <div className="col-md-5">
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0"><i className="bi bi-search"></i></span>
              <input 
                type="text" 
                className="form-control bg-light border-start-0" 
                placeholder="Search products by name..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="col-md-4">
            <select 
              className="form-select bg-light" 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Decor">Decor</option>
              <option value="Furniture">Furniture</option>
              <option value="Lighting">Lighting</option>
              <option value="Wall Art">Wall Art</option>
            </select>
          </div>

          {/* Price Sort */}
          <div className="col-md-3">
            <select 
              className="form-select bg-light" 
              value={sortOrder} 
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="default">Sort by: Featured</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold mb-0">Products ({filteredProducts.length})</h4>
          {(searchTerm || selectedCategory !== 'All' || sortOrder !== 'default') && (
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setSortOrder('default'); }}
              className="btn btn-sm btn-link text-decoration-none"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="card border-0 shadow-sm p-5 text-center my-4">
            <h5>No products found matching your criteria</h5>
            <p className="text-muted">Try adjusting your search keyword or clearing category filters.</p>
          </div>
        ) : (
          <div className="row g-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-md-3">
                <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                  <Link to={`/store/product/${product.id}`}>
                    <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '220px', objectFit: 'cover' }} />
                  </Link>
                  <div className="card-body d-flex flex-column">
                    <span className="badge bg-secondary mb-2 w-auto align-self-start">{product.category}</span>
                    <Link to={`/store/product/${product.id}`} className="text-decoration-none text-dark">
                      <h5 className="card-title fw-bold">{product.name}</h5>
                    </Link>
                    <p className="card-text text-primary fw-bold fs-5 mb-3">${product.price.toFixed(2)}</p>
                    <button 
                      onClick={() => addToCart(product)} 
                      className="btn btn-outline-primary mt-auto w-100 fw-bold"
                    >
                      <i className="bi bi-cart-plus me-2"></i>Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomerHome
import React from 'react'
import CustomerNavbar from '../../components/CustomerNavbar'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

function CustomerHome() {
  const { addToCart } = useCart()

  const featuredProducts = [
    { id: 1, name: 'Nordic Ceramic Vase', price: 45.00, category: 'Decor', image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=500&auto=format&fit=crop&q=60' },
    { id: 2, name: 'Velvet Accent Chair', price: 220.00, category: 'Furniture', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60' },
    { id: 3, name: 'Minimalist Wall Clock', price: 35.00, category: 'Wall Art', image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&auto=format&fit=crop&q=60' },
    { id: 4, name: 'Modern Brass Table Lamp', price: 78.00, category: 'Lighting', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=60' },
  ]

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
          minHeight: '380px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white mb-3">Elevate Your Living Space</h1>
          <p className="lead text-light mb-4">Discover unique, handcrafted decor items from verified independent artisans.</p>
          <a href="#featured" className="btn btn-primary btn-lg fw-bold px-4 py-2">Explore Marketplace</a>
        </div>
      </div>

      {/* Featured Products Grid */}
      <div id="featured" className="container pb-5">
        <h2 className="fw-bold mb-4 text-center">Featured Home Decor</h2>
        <div className="row g-4">
          {featuredProducts.map((product) => (
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
      </div>
    </div>
  )
}

export default CustomerHome
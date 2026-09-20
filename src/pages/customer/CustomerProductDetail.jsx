import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import CustomerNavbar from '../../components/CustomerNavbar'
import { useCart } from '../../context/CartContext'

function CustomerProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  // Sample database of products
  const products = {
    1: { id: 1, name: 'Nordic Ceramic Vase', price: 45.00, category: 'Decor', description: 'Handcrafted ceramic vase with a smooth matte finish, perfect for minimal and modern home interiors.', image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=500&auto=format&fit=crop&q=60' },
    2: { id: 2, name: 'Velvet Accent Chair', price: 220.00, category: 'Furniture', description: 'Luxurious velvet accent chair featuring ergonomic support and sturdy brass metal legs.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60' },
    3: { id: 3, name: 'Minimalist Wall Clock', price: 35.00, category: 'Wall Art', description: 'Sleek silent-sweep wooden wall clock designed for modern home or office spaces.', image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&auto=format&fit=crop&q=60' },
    4: { id: 4, name: 'Modern Brass Table Lamp', price: 78.00, category: 'Lighting', description: 'Warm ambient table lamp with an brushed brass body and hand-blown glass globe.', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=60' }
  }

  const product = products[id] || products[1]

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="bg-light min-vh-100">
      <CustomerNavbar />
      
      <div className="container py-5">
        <Link to="/store" className="btn btn-outline-secondary mb-4">
          <i className="bi bi-arrow-left me-2"></i>Back to Products
        </Link>

        <div className="card border-0 shadow-sm p-4">
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <img 
                src={product.image} 
                alt={product.name} 
                className="img-fluid rounded-3 w-100" 
                style={{ maxHeight: '420px', objectFit: 'cover' }} 
              />
            </div>
            <div className="col-md-6">
              <span className="badge bg-secondary mb-2">{product.category}</span>
              <h2 className="fw-bold mb-2">{product.name}</h2>
              <h3 className="text-primary fw-bold mb-3">${product.price.toFixed(2)}</h3>
              <p className="text-muted mb-4">{product.description}</p>
              
              <div className="d-flex align-items-center gap-3 mb-4">
                <label className="fw-semibold">Quantity:</label>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} 
                  min="1" 
                  className="form-control text-center" 
                  style={{ width: '70px' }} 
                />
              </div>

              <div className="d-flex gap-3">
                <button onClick={handleAddToCart} className="btn btn-primary px-4 py-2 fw-bold">
                  <i className="bi bi-cart-plus me-2"></i>
                  {added ? 'Added to Cart!' : 'Add to Cart'}
                </button>
                <Link to="/store/cart" className="btn btn-outline-primary px-4 py-2 fw-bold">
                  View Cart
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
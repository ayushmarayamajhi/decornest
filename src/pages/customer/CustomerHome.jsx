import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CustomerNavbar from '../../components/CustomerNavbar'
import { useCart } from '../../context/CartContext'
import { SAMPLE_PRODUCTS } from '../../data/productsData'

export default function CustomerHome() {
  const { addToCart } = useCart()
  const [toastMessage, setToastMessage] = useState('')

  // Read products dynamically from localStorage
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('decorNest_products')
    return saved ? JSON.parse(saved) : SAMPLE_PRODUCTS
  })

  // Sync state if localStorage changes
  useEffect(() => {
    const saved = localStorage.getItem('decorNest_products')
    if (saved) {
      setProducts(JSON.parse(saved))
    }
  }, [])

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 1)
    setToastMessage(`Added "${product.name}" to cart!`)
    setTimeout(() => setToastMessage(''), 2500)
  }

  return (
    <div className="bg-light min-vh-100">
      <CustomerNavbar />

      <div className="container py-5">
        {/* Success Alert Banner */}
        {toastMessage && (
          <div
            className="alert alert-success alert-dismissible fade show shadow position-fixed top-0 end-0 m-4 z-3"
            role="alert"
          >
            <i className="bi bi-check-circle-fill me-2"></i>
            {toastMessage}
          </div>
        )}

        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">DecorNest Collection</h1>
          <p className="text-muted fs-5">
            Elevate your living space with our handcrafted minimalist decor.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100">
                <Link to={`/store/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top object-fit-cover"
                    style={{ height: '220px' }}
                  />
                </Link>

                <div className="card-body d-flex flex-column">
                  <span className="badge bg-secondary w-auto align-self-start mb-2">
                    {product.category}
                  </span>

                  <h5 className="card-title fw-bold fs-6">
                    <Link
                      to={`/store/product/${product.id}`}
                      className="text-decoration-none text-dark"
                    >
                      {product.name}
                    </Link>
                  </h5>

                  <p className="text-primary fw-bold fs-5 mb-3">
                    ${product.price.toFixed(2)}
                  </p>

                  <div className="mt-auto d-flex gap-2">
                    <Link
                      to={`/store/product/${product.id}`}
                      className="btn btn-outline-secondary btn-sm flex-fill fw-semibold"
                    >
                      View Details
                    </Link>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm flex-fill fw-semibold"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
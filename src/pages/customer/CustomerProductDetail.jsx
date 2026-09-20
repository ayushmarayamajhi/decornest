import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import CustomerNavbar from '../../components/CustomerNavbar'
import { useCart } from '../../context/CartContext'
import { SAMPLE_PRODUCTS } from '../../data/productsData'

function CustomerProductDetailContent() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const currentId = parseInt(id)

  // Dynamically pull products from localStorage if available, falling back to SAMPLE_PRODUCTS
  const savedProducts = JSON.parse(localStorage.getItem('decorNest_products') || 'null') || SAMPLE_PRODUCTS
  const product = savedProducts.find((p) => p.id === currentId) || savedProducts[0]

  const [quantity, setQuantity] = useState(1)
  const [addedAlert, setAddedAlert] = useState(false)

  // Isolated storage key strictly mapped to current product ID
  const storageKey = product ? `decorNest_reviews_v3_product_${product.id}` : 'decorNest_reviews_default'

  const [reviews, setReviews] = useState(() => {
    if (!product) return []
    const saved = localStorage.getItem(storageKey)
    return saved ? JSON.parse(saved) : (product.initialReviews || [])
  })

  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' })

  // Re-sync reviews whenever product changes
  useEffect(() => {
    if (!product) return
    const saved = localStorage.getItem(storageKey)
    setReviews(saved ? JSON.parse(saved) : (product.initialReviews || []))
  }, [storageKey, product?.id])

  // Save changes to localStorage
  useEffect(() => {
    if (!product) return
    localStorage.setItem(storageKey, JSON.stringify(reviews))
  }, [reviews, storageKey, product])

  // Early return if product isn't found
  if (!product) {
    return (
      <div className="bg-light min-vh-100">
        <CustomerNavbar />
        <div className="container py-5 text-center">
          <h2>Product Not Found</h2>
          <p className="text-muted">The product you are looking for does not exist.</p>
          <Link to="/store" className="btn btn-primary mt-3">
            Back to Storefront
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setAddedAlert(true)
    setTimeout(() => setAddedAlert(false), 2500)
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault()
    if (!newReview.name.trim() || !newReview.comment.trim()) return

    const createdReview = {
      id: Date.now(),
      name: newReview.name,
      rating: parseInt(newReview.rating),
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    }

    setReviews([createdReview, ...reviews])
    setNewReview({ name: '', rating: 5, comment: '' })
  }

  return (
    <div className="bg-light min-vh-100">
      <CustomerNavbar />

      <div className="container py-5">
        <Link to="/store" className="text-decoration-none text-muted mb-4 d-inline-block">
          <i className="bi bi-arrow-left me-1"></i> Back to Storefront
        </Link>

        {addedAlert && (
          <div className="alert alert-success alert-dismissible fade show shadow-sm" role="alert">
            <i className="bi bi-check-circle-fill me-2"></i>
            Added <strong>{quantity}x {product.name}</strong> to your shopping cart!
          </div>
        )}

        {/* Product Details Card */}
        <div className="card border-0 shadow-sm p-4 mb-5">
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid rounded-3 w-100 object-fit-cover"
                style={{ maxHeight: '420px' }}
              />
            </div>
            <div className="col-md-6">
              <span className="badge bg-secondary mb-2">{product.category}</span>
              <h2 className="fw-bold mb-2">{product.name}</h2>

              <div className="d-flex align-items-center mb-3">
                <div className="text-warning me-2">
                  <i className="bi bi-star-fill"></i> {product.rating}
                </div>
                <span className="text-muted small">({reviews.length} reviews)</span>
              </div>

              <h3 className="fw-bold text-primary mb-3">${product.price.toFixed(2)}</h3>
              <p className="text-muted mb-4">{product.description}</p>

              <div className="d-flex align-items-center gap-3 mb-4">
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
                    className="form-control text-center bg-white"
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

                <button
                  className="btn btn-primary btn-lg flex-grow-1 fw-semibold"
                  onClick={handleAddToCart}
                >
                  <i className="bi bi-cart-plus me-2"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm p-4">
              <h5 className="fw-bold mb-3">Leave a Review</h5>
              <form onSubmit={handleReviewSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Aarav Patel"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Rating</label>
                  <select
                    className="form-select"
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                  >
                    <option value="5">⭐⭐⭐⭐⭐ (5/5 Stars)</option>
                    <option value="4">⭐⭐⭐⭐ (4/5 Stars)</option>
                    <option value="3">⭐⭐⭐ (3/5 Stars)</option>
                    <option value="2">⭐⭐ (2/5 Stars)</option>
                    <option value="1">⭐ (1/5 Star)</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Feedback</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="What did you like or dislike about this product?"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100 fw-bold">
                  Submit Review
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="card border-0 shadow-sm p-4">
              <h5 className="fw-bold mb-3">Customer Reviews for {product.name}</h5>
              {reviews.length === 0 ? (
                <p className="text-muted">No reviews yet. Be the first to leave feedback!</p>
              ) : (
                <div className="d-flex flex-column gap-3">
                  {reviews.map((rev) => (
                    <div key={rev.id} className="border-bottom pb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="fw-bold">{rev.name}</span>
                        <span className="text-muted small">{rev.date}</span>
                      </div>
                      <div className="text-warning small mb-2">
                        {'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}
                      </div>
                      <p className="text-secondary small mb-0">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CustomerProductDetail() {
  const { id } = useParams()
  return <CustomerProductDetailContent key={id || 'default'} />
}
import React from 'react'

function AdminCategories() {
  return (
    <div className="container-fluid">
      <h2 className="h3 mb-4"><i className="bi bi-tags me-2"></i>Category Management</h2>
      <div className="card border-0 shadow-sm p-4">
        <div className="d-flex justify-content-between mb-3">
          <input type="text" className="form-control w-50" placeholder="New category name..." />
          <button className="btn btn-primary"><i className="bi bi-plus-lg me-1"></i>Add Category</button>
        </div>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Furniture
            <button className="btn btn-sm btn-outline-danger">Delete</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Decor & Lighting
            <button className="btn btn-sm btn-outline-danger">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AdminCategories
import React from 'react'

function MerchantInventory() {
  const inventoryItems = [
    { id: 1, name: 'Nordic Ceramic Vase', stock: 12, threshold: 5, status: 'In Stock' },
    { id: 2, name: 'Velvet Accent Chair', stock: 5, threshold: 3, status: 'Low Stock' },
    { id: 3, name: 'Minimalist Wall Clock', stock: 0, threshold: 5, status: 'Out of Stock' },
  ]

  return (
    <div className="container-fluid">
      <h2 className="h3 text-success mb-4"><i className="bi bi-clipboard-data me-2"></i>Inventory Management</h2>
      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Product</th>
                <th>Current Stock</th>
                <th>Alert Threshold</th>
                <th>Stock Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item) => (
                <tr key={item.id}>
                  <td className="fw-semibold">{item.name}</td>
                  <td>{item.stock} units</td>
                  <td>{item.threshold} units</td>
                  <td>
                    <span className={`badge ${
                      item.stock === 0 ? 'bg-danger' : item.stock <= item.threshold ? 'bg-warning text-dark' : 'bg-success'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-success"><i className="bi bi-plus-circle me-1"></i> Restock</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MerchantInventory
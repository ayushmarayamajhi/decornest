import React, { useState } from 'react'

function MerchantStore() {
  const [storeData, setStoreData] = useState({
    name: 'Artisan Home Decor',
    description: 'Handcrafted ceramic vases, luxury velvet furniture, and modern lighting.',
    contactEmail: 'contact@artisandecor.com',
    phone: '+1 555-0192',
    address: '456 Design Street, City Center'
  })

  return (
    <div className="container-fluid">
      <h2 className="h3 text-success mb-4"><i className="bi bi-building me-2"></i>Store Profile Settings</h2>
      <div className="card border-0 shadow-sm p-4">
        <form onSubmit={(e) => { e.preventDefault(); alert('Store profile updated!'); }}>
          <div className="mb-3">
            <label className="form-label fw-bold">Store Name</label>
            <input 
              type="text" 
              className="form-control" 
              value={storeData.name} 
              onChange={(e) => setStoreData({ ...storeData, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Store Description</label>
            <textarea 
              className="form-control" 
              rows="3" 
              value={storeData.description}
              onChange={(e) => setStoreData({ ...storeData, description: e.target.value })}
            ></textarea>
          </div>
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="form-label fw-bold">Contact Email</label>
              <input 
                type="email" 
                className="form-control" 
                value={storeData.contactEmail}
                onChange={(e) => setStoreData({ ...storeData, contactEmail: e.target.value })}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Phone Number</label>
              <input 
                type="text" 
                className="form-control" 
                value={storeData.phone}
                onChange={(e) => setStoreData({ ...storeData, phone: e.target.value })}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success"><i className="bi bi-check-circle me-1"></i> Save Changes</button>
        </form>
      </div>
    </div>
  )
}

export default MerchantStore
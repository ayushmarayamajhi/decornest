import React from 'react'
import MerchantSidebar from '../components/MerchantSidebar'

function MerchantLayout({ children }) {
  return (
    <div className="d-flex">
      <MerchantSidebar />
      <div className="flex-grow-1 p-4 bg-light" style={{ minHeight: '100vh' }}>
        {children}
      </div>
    </div>
  )
}

export default MerchantLayout
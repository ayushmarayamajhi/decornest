import React from 'react'

function MerchantSales() {
  return (
    <div className="container-fluid">
      <h2 className="h3 text-success mb-4"><i className="bi bi-currency-dollar me-2"></i>Sales & Revenue Reports</h2>
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card bg-success text-white p-3 border-0 shadow-sm">
            <h6>Total Revenue</h6>
            <h3>$3,450.00</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-primary text-white p-3 border-0 shadow-sm">
            <h6>Orders Completed</h6>
            <h3>42</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-info text-dark p-3 border-0 shadow-sm">
            <h6>Average Order Value</h6>
            <h3>$82.14</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MerchantSales
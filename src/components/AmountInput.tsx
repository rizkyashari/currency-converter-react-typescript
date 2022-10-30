import React from 'react';
 
function AmountInput() {
    return (
      <div className="mb-3">
        <label className="form-label fs-6 fw-bold d-flex justify-content-center" style={{color: "#6C5B7B"}}>Enter Amount</label>
        <input type="number" id="amount" placeholder="Enter amount..." className="form-control" aria-describedby="emailHelp" required/>
      </div>
    )   
}
   
export default AmountInput;
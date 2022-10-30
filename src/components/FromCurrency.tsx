import React from 'react';
 
function FromCurrency() {
    return (
        <div className='p-2 from'>
             <p className="fs-6 fw-bold" style={{color: "#6C5B7B"}}>From</p>
                <div className="select-box">
                    <img src="https://flagcdn.com/16x12/us.png" alt="flag"/>
                <select>  </select>
                </div>
        </div>
    )   
}
   
export default FromCurrency;
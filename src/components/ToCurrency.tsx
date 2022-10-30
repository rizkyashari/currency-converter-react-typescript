import React from 'react';
 
function ToCurrency() {
    return (
        <div className='p-2 to'>
             <p className="fs-6 fw-bold" style={{color: "#6C5B7B"}}>To</p>
                <div className="select-box">
                    <img src="https://flagcdn.com/16x12/id.png" alt="flag"/>
                <select>  </select>
                </div>
        </div>
    )   
}
   
export default ToCurrency;
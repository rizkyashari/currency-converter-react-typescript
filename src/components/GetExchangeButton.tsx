import React from 'react';
 
function GetExchangeButton() {
    return (
        <div className="d-grid gap-2">
            <div className="d-flex justify-content-center exchange-rate fw-bold" style={{color: "#6C5B7B"}}>Getting exchange rate...</div>
            <button className="button">Get Exchange Rate</button>
        </div>
    )   
}
   
export default GetExchangeButton;
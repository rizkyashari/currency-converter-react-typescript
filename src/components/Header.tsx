import React from 'react';
 
function Header() {
    return (
        <div className="card-group" style={{padding: "0.25em"}}>
            <div className="card" style={{borderRadius: "0", border: "none"}}>
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center fw-bold fs-3" style={{color: "#6C5B7B"}}>Currency Converter</h5>
                </div>
            </div>
        </div>
    )   
}
   
export default Header;
import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4" style={{paddingTop: "30px", backgroundColor: "var(--bs-card-cap-bg)", border: "none"}}>
            <div className="col">
               <div className="card h-100" style={{border: "none", borderRadius: "0"}}></div>
            </div>
            <div className="col">
                <div className="container">
                    <div className="main-card card h-100 shadow-lg p-3 mb-5 bg-body rounded" style={{border: "none"}}>
                        <div className="card-group"></div>
                        <Header />
                        <Form />
                        <div className="card-group"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
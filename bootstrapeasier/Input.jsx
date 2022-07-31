import React from "react";
// import "./web.css"



export default function Input() {
    return (
        <div className="container-fluid bg-primary">
             <div className="input-group pb-4" style={{marginLeft:'auto'}}>
                <input type="text" className="form-control" placeholder="Search something"/>
                <div className="input-group-append">
                    <button className="btn btn-warning text-light mt-0" type="button">Search</button>
                </div>
            </div>
        </div>
    )
}
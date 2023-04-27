import React from "react";
import './about.css';
export function About(){

    return(
        <>
        <div className="maindiv"><br/>
        <h1 className="h">India's Leading digital platform Expert<br/>Services</h1>
        <button className="maindivbtn">Story</button>
        <button className="maindivbtn">Investors</button>
        <button className="maindivbtn">Board </button>
        </div>
        <div>
            <p className="para">Sulekha is a leading digital platform for local service businesses in India. Sulekha
             focuses on expert services clustered around Home,<br/> Life and Self
              and where the user need is customized. Using technology and domain intelligence,
              the platform seeks to understand <br/>the user need in detail and
              matches it to verified service professionals.</p>
            <p className="para"> Quick Facts</p>
            <div className="d-flex flex-row mb-3">
            <div className="userdiv"><h2>30+ M</h2> 
            <p>Happy Users</p></div>
            <div className="userdiv"><h2>200+ K</h2>
            <p>Verified Experts</p></div>
            <div className="userdiv"><h2>200+</h2>
            <p>Categories</p></div>
            </div>
        </div>
        </>
    );
}
import React from "react";
import { Link } from "react-router-dom";

function NoProducts({text}){


    return(

        <>
        
        <div className = "d-flex flex-column justify-content-center align-items-center" >
            <h3>{text}</h3>
            <Link  to = "/" >
              <button className = " btn btn-outline-secondary rounded-1 btn-lg" >Inapoi la home</button>
            </Link>
        </div>

        </>
    )

}


export default NoProducts;
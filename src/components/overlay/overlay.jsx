import React from 'react';
import "./style.css";

const Overlay = ({ show }) => {

    return(
        <>
            { show ? (
                <div className="overlay"></div>
            )
            :
            (
                <div className="hide"></div>
            )

            }
    
        </>
    )
}
export default Overlay;

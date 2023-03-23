import React from "react";
import "./ResetButton.css"

export const ResetButton = ({resetBoard}) =>{
    return(
        <button className="resetbtn" onClick={resetBoard}>
            RESET
        </button>
    )
} 
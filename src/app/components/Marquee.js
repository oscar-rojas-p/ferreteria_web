import React, { useState, useEffect } from "react";
import '../../assets/css/layoutMaster.css'
export const Marquee = (props) => {
    return (
        <>
            <div className="marquee-container h-[23%] flex justify-center">
                <div className="marquee-content text-sm lg:text-xs">{props.children}</div>
            </div>
        </>
    )
}
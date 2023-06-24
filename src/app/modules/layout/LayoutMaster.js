import React, { useState, useEffect, useRef } from 'react'
import '../../../assets/css/layoutMaster.css'



function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}

export const LayoutMaster = ({children}) => {

    

    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            
        }, 100)

        window.addEventListener('resize', debouncedHandleResize)

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)
        
        }

    }, [])


    return (
        <>
            <div className=" dark:text-white">
                <div className="main  overflow-auto">
                        {children}
                </div>
            </div>
        </>
    )
}
import React, { useState, useEffect } from "react";

export const Timer = () => {

    const obtenerTiempo = () => {
        let hours = new Date().getHours();
        let minute = new Date().getMinutes();
        let second = new Date().getSeconds();
        hours = hours < 10 ? `0${hours}` : hours
        minute = minute < 10 ? `0${minute}` : minute
        second = second < 10 ? `0${second}` : second
        return`${hours}:${minute}:${second}`;
    }

    const [ time, setTime ] = useState(obtenerTiempo());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => obtenerTiempo())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [time])

    return (
        <div className="h-[70%] flex justify-center items-center p-1">
            <label className="text-3xl lg:text-sm font-medium">
                { time }
            </label>
        </div>
        
    )
}
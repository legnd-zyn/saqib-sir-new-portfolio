"use client";
import React from 'react'
import Tilt from "react-parallax-tilt"


const ClientTiltCompunent = ({ children }) => {
    return (
        <Tilt>{children}</Tilt>
    )
}

export default ClientTiltCompunent
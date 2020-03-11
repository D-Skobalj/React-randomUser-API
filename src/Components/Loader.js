import React from 'react'
import loader from "../assets/loader.gif"

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader"><img src={loader} alt=""/></div>
        </div>
    )
}

export default Loader

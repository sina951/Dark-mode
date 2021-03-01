import React, { useState, useEffect } from "react"
import { Link as SLink } from 'react-scroll';
import logo from "../../images/logo.png"
import { FaAlignRight } from "react-icons/fa"
import NavLinks from "../../constants/smoothLinks"
// import PageLinks from "../../constants/links"

const Navigation = () => {

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">

                    <img className="nav-logo" src={logo} alt="logo" />
                    
                    <button type="button" className="toggle-btn">
                        <FaAlignRight></FaAlignRight>
                    </button>
                </div>
                
                {/* <PageLinks styleClass="nav-links"></PageLinks> */}
                <NavLinks styleClass="nav-links"></NavLinks>

            </div>
        </nav>
    )
}

export default Navigation
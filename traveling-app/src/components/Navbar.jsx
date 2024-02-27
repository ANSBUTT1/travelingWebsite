import React from 'react'
import { Link } from "react-scroll"


const Navbar = () => {
    return (
        <div>
            <div>
                <div>
                    <Link>
                        <h1>Adventures</h1>
                    </Link>
                </div>
                <nav>
                    <Link to="/" smooth={true} duration={500} spy={true} className="cursor-pointer">
                        Home
                    </Link>
                    <Link to="/" smooth={true} duration={500} spy={true} className="cursor-pointer">
                        Features
                    </Link>
                    <Link to="/" smooth={true} duration={500} spy={true} className="cursor-pointer">
                        Desination
                    </Link>
                    <Link to="/" smooth={true} duration={500} spy={true} className="cursor-pointer">
                        About
                    </Link>
                    <Link to="/" smooth={true} duration={500} spy={true} className="cursor-pointer">
                        Contact
                    </Link>
                </nav>
                <div>
                    <h1>Register</h1>
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
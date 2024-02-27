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
                    <Link>
                        Home
                    </Link>
                    <Link>
                        Features
                    </Link>
                    <Link>
                        Desination
                    </Link>
                    <Link>
                        About
                    </Link>
                    <Link>
                        Contact
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
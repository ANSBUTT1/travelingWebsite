import React, { useState } from 'react'
import { Link } from "react-scroll"
import Button from '../layouts/Button'
import { AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {

    const backgroundColor = "bg-white"

    const [menu, setMenu] = useState(false);

    const handleChange = () => {

        setMenu(!menu);
    }

    return (
        <div className='sticky top-0 left-0 '>
            <div className='flex flex-row justify-between p-5 md:px-32 px-5  bg-darkBackground text-white '>
                <div className='flex items-center'>
                    <Link to="/" smooth={true} duration={500} spy={true} className="cursor-pointer  transition-all">
                        <h1 className='font-semibold text-xl cursor-pointer'>Adventures</h1>
                    </Link>
                </div>
                <nav className=' hidden lg:flex flex-row items-center gap-6 hidden:lg'>
                    <Link to="home" smooth={true} duration={500} spy={true} className="cursor-pointer hover:text-brightColor transition-all ">
                        Home
                    </Link>
                    <Link to="features" smooth={true} duration={500} spy={true} className="cursor-pointer hover:text-brightColor transition-all">
                        Features
                    </Link>
                    <Link to="destination" smooth={true} duration={500} spy={true} className="cursor-pointer hover:text-brightColor transition-all">
                        Desination
                    </Link>
                    <Link to="about" smooth={true} duration={500} spy={true} className="cursor-pointer hover:text-brightColor transition-all">
                        About
                    </Link>
                    <Link to="contact" smooth={true} duration={500} spy={true} className="cursor-pointer hover:text-brightColor transition-all">
                        Contact
                    </Link>
                </nav>
                <div className='flex-row items-center gap-4 lg:flex hidden'>
                    <h1 className='hover:text-brightColor transition-all cursor-pointer'>Register</h1>
                    <Button title="Login" backgroundColor={backgroundColor} />
                </div>
                <div className='lg:hidden flex items-center p-2' onClick={handleChange}>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={`${menu ? "translate-x-0" : " -translate-x-full"} lg:hidden flex flex-col absolute bg-darkBackground text-white left-0 top-20 font-semibold text-2xl text-center rounded-full sm:rounded-none  pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`} >
                <Link to="home" smooth={true} duration={500} spy={true} className="cursor-pointer hover:text-brightColor transition-all ">
                    Home
                </Link>
                <Link to="features" smooth={true} duration={500} spy={true} className="cursor-pointer hover:text-brightColor transition-all">
                    Features
                </Link>
                <Link to="destination" smooth={true} duration={500} spy={true} className="cursor-pointer hover:text-brightColor transition-all">
                    Desination
                </Link>
                <Link to="about" smooth={true} duration={500} spy={true} className="cursor-pointer hover:text-brightColor transition-all">
                    About
                </Link>
                <Link to="contact" smooth={true} duration={500} spy={true} className="cursor-pointer hover:text-brightColor transition-all">
                    Contact
                </Link>
                <div className='flex-col justify-center items-center gap-4 lg:hidden flex'>
                    <h1 className='hover:text-brightColor transition-all cursor-pointer'>Register</h1>
                    <Button title="Login" backgroundColor={backgroundColor} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
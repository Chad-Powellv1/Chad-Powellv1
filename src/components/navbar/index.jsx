import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss'


const data = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'About',
        to: '/about'
    },
    {
        label: 'Portfolio',
        to: '/portfolio'
    },
    {
        label: 'Contact',
        to: '/contact'
    }
]

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };


    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-container-logo'>
                        <img src={Logo} alt='logo' width='50px' />
                    </Link>
                </div>
                <ul className={`navbar-container-list ${toggleMenu ? 'active' : ''}`}>
                    {data.map((item, key) => (
                        <li key={key} className='navbar-container-list-item'>
                            <Link className="navbar-container-list-item-links" to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="nav-icon" onClick={handleToggleMenu}>
                    {toggleMenu ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </nav>
        </div >
    );
}
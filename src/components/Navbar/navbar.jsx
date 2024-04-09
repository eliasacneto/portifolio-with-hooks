import React from 'react'
import "./navbar.css"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a className='nav-link' href="#projects">Projetos</a></li>
                <li><a className='nav-link' href="#blog">Blog</a></li>
                <li><a className='nav-link' href="#contact">Contato</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
import React from 'react'
import "./navbar.css"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a className='nav-link' href="#">Projetos</a></li>
                <li><a className='nav-link' href="#">Blog</a></li>
                <li><a className='nav-link' href="#">Contato</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
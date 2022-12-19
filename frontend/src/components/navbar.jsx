import React from 'react';
import '../styling/navbar.css';

function Navbar()
{
    return(
        <div class="main">
            <a class="nav-title" href="/">Christopher Rumpf's Website</a>
            <div class="nav-directory">
                <a class="nav-item" href="/">Home</a>
                <a class="nav-item" href="/aboutme">About Me</a>
                <a class="nav-item" href="/projects">Projects</a>
                <a class="nav-item" href="/contact">Contact</a>
            </div>
        </div>
    )
}

export default Navbar;
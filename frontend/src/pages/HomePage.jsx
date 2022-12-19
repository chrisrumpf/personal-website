import React from 'react';

import Navbar from '../components/navbar.jsx';
import '../styling/general.css';

function HomePage()
{
    return(
        <html>
            <Navbar/>
            <div class="page-body">
                <h1 class="title">Welcome to my website!</h1>
                <p>This is a home for not only information about me, but also links to projects I have developed.</p>
                <p>The links in the navbar at the top of the page can be used to navigate around the site.</p>
                <p>Take a look around!</p>
            </div>
        </html>
    )
}

export default HomePage;
import React from 'react';

import Navbar from '../components/navbar.jsx';
import '../styling/general.css';

function AboutMePage()
{
    return(
        <html>
            <Navbar/>
            <div class="page-body">
                <h1 class="title">About Me</h1>
            </div>
        </html>
    )
}

export default AboutMePage;
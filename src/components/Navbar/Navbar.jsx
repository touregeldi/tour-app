import React from 'react';
import'./Navbar.module.scss'


const Navbar = (props) => {
    return (
        <header >
            <img src={'./assets/logo/logo.png'} alt='logo'></img>
            <nav>
                <ul>
                    <div><li><a href='/' >Home</a></li></div>
                    <div><li><a href='/about' >About</a></li></div>
                    <div><li><a href='/tours' >Tours</a></li></div>
                </ul>  
            </nav>
          
        </header>
    );
}

export default Navbar;


import React from 'react';
import "../globals.css";

export default function Navbar() {
    return (
        <div className='navbar'>
            <ul>

            <li><a href="about" target=' '>About</a></li>
           <li> <a href="contact" target=' '>Contact</a></li>
            <li><a href="services" target=' '>Services</a></li>
            </ul>

        </div>
    );
}


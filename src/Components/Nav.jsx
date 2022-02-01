import React, { useEffect, useState } from 'react';
import '../Css/Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className='nav__logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix logo" />
            <img className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/7/72/Avatar_icon_green.svg" alt="" />
        </div>
    );
}

export default Nav;

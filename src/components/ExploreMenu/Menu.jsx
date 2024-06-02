
import React from 'react';
import './Menu.css'; // Import Menu CSS

function Menu({ menu, isActive, onClick }) {
    return (
        <div className={`menu-list ${isActive ? 'active' : ''}`} onClick={onClick}>
            <img src={menu.menu_image} alt="" />
            <p>{menu.menu_name}</p>
        </div>
    );
}

export default Menu;

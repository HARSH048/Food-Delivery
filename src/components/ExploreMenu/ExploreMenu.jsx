import React, { useState } from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
import Menu from './Menu';

function ExploreMenu() {
    const [activeItem,setActiveItem]=useState(null);
    const handleItemClick = (index) => {
        console.log(activeItem);
        setActiveItem(index === activeItem ? null : index);// Update activeItem directly within the function
      };
  return (
    <div className="explore-menu">
      <div className='explore-menu-list'>
      {menu_list && menu_list.map((ele, index) => (
        <Menu key={index} 
        onClick={()=>handleItemClick(index)}
        isActive={index === activeItem} // Pass isActive prop to Menu
        menu={ele} 
        />
      ))}
      </div>
    </div>
  );
}

export default ExploreMenu;

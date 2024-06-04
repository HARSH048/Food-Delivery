import React, { useContext, useState } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import Menu from "./Menu";
import { StoreContext } from "../../context/StoreContext";

function ExploreMenu() {
  const [activeItem, setActiveItem] = useState(null);
  const { setCategory } = useContext(StoreContext);
  const handleItemClick = (index, menu_name) => {
    setCategory(menu_name);
    setActiveItem(index === activeItem ? null : index); // Update activeItem directly within the function
  };
  return (
    <div className="explore-menu" id = 'explore-menu'>
      <div className="explore-menu-list">
        {menu_list &&
          menu_list.map((ele, index) => (
            <Menu
              key={index}
              onClick={() => handleItemClick(index, ele.menu_name)}
              isActive={index === activeItem} // Pass isActive prop to Menu
              menu={ele}
            />
          ))}
      </div>
    </div>
  );
}

export default ExploreMenu;

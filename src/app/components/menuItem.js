import React, { useState } from 'react';

const MenuItem = ({ title, path }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleSubMenuToggle = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <li className="menu-item ">
      <a href={path} className='hover:text-orange-600 text-blue-800' onClick={handleSubMenuToggle}>
        {title}
      </a>
    </li>
  );
};

export default MenuItem;

import React from 'react';

const Menu = ({ id, title, category, price, img, desc }) => {
  console.log(img);
  return (
    <div className='menu'>
      <img src={img} alt={title} />
      <div className='details'>
        <div className='header'>
          <h5>{title}</h5>
          <p>${price}</p>
        </div>
        <p>{desc.replace(/`/g, '')}</p>
      </div>
    </div>
  );
};

export default Menu;

import { useState } from 'react';

const Categories = ({ categories, onFilterMenusByCategory }) => {
  const [activeCategory, setaActiveCategory] = useState('all');
  return (
    <div className='categories'>
      {categories.map((category, key) => {
        return (
          <button
            key={key}
            onClick={() => {
              onFilterMenusByCategory(category);
              setaActiveCategory(category);
            }}
            className={`category ${category === activeCategory ? 'active' : ''}`}
          >
            {/* {category.charAt(0).toUpperCase() + category.slice(1)} */}
            {/* by using CSS */}
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

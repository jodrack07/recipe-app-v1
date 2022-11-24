import { useState } from 'react';
import MENUS from './data/menus';
import Menus from './components/Menus';
import Categories from './components/Categories';
import Loading from './components/Loading';
import './App.css';

const App = () => {
  const [menus, setMenus] = useState(MENUS);
  const categories = ['all', ...new Set(MENUS.map((menu) => menu.category))];

  const handleFilterMenusByCategories = (category) => {
    // return the whole menus if category is all
    if (category === 'all') {
      setMenus(MENUS);
      return;
    }

    const newMenus = MENUS.filter((menu) => {
      return menu.category === category;
    });
    setMenus(newMenus);
  };

  return (
    <div className='app'>
      <div className='intro'>
        <h2>Our Menu</h2>
        {menus.length <= 0 && <Loading />}
        <div className='underline'></div>
      </div>
      <Categories
        categories={categories}
        onFilterMenusByCategory={handleFilterMenusByCategories}
      />
      <Menus menus={menus} />
    </div>
  );
};

export default App;

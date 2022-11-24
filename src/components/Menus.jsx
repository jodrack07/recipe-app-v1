import Menu from './Menu';

const Menus = ({ menus }) => {
  return (
    <div className="menus">
      {menus.map((menu) => (
        <Menu key={menu.id} {...menu} />
      ))}
    </div>
  );
};

export default Menus;

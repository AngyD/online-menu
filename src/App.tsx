import { useState, useEffect } from 'react';
import { Menu } from './interfaces';
import { MenuCategory, Footer } from './components';
import './App.css';
import data from './data.json';

const menuData: Menu[] = data;

export default function App() {
  const [menu, setMenu] = useState<Menu[]>([]);

  useEffect(() => {
    setMenu(menuData);
  }, []);

  return (
    <>
      <h1 className="title-menu text-2xl mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        🥙 Italian Restaurant Menu
      </h1>
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10"
      >
        {menu.map((element, index) => (
          <MenuCategory
            key={index}
            name={element.category}
            dishes={element.items}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import axios from 'axios';

const Header = ({ cartData }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios('https://fakestoreapi.com/products/categories').then(({ data }) =>
      setCategories(data)
    );
  }, []);

  const totalItemsInCart = cartData ? cartData.reduce(
    (acc, item) => acc + (item.count || 0),
    0
  ) : 0;

  const cartDisplay = totalItemsInCart <= 99 ? totalItemsInCart : '99+';

  return (
    <header className='header'>
      <div className='container header-container'>
        <h1 className='header-logo'>
          <Link to={'/'}> Shop </Link>
        </h1>

        <nav className='link'>
          {categories.map((item) => (
            <Link to={`/category/${item}`} key={item}>
              {item}
            </Link>
          ))}
          <Link to={'/'}>Home</Link>
          <Link to={'/cart'}>
            Cart {cartDisplay} {/* Вот здесь отображается количество товаров */}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

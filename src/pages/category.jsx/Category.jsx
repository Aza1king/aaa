import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';
import { useParams } from 'react-router-dom';

const Category = ({ addCart }) => {
  const [products, setProducts] = useState([]);
  const params = useParams();

  const getProducts = () => {
    axios(`https://fakestoreapi.com/products/category/${params.category}`)
      .then(({ data }) => setProducts(data))
      .catch((error) => {
        console.error('Error fetching category products:', error);
        setProducts([]);
      });
  };

  useEffect(() => {
    getProducts();
  }, [params.category]);

  return (
    <section className='category'>
      <div className='container'>
        <div className='row'>
          {products.map((item) => (
            <div key={item.id} className='col-4'>
              <Card addCart={addCart} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;

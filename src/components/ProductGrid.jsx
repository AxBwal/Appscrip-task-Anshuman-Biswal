import ProductCard from './ProductCard';
import styles from '../styles/ProductGrid.module.css';
import { useState } from 'react';

export default function ProductGrid({ products }) {
  const [likeCount, setLikeCount] = useState(0);

  const updateLikeCount = (isLiked) => {
    setLikeCount((prevCount) => (isLiked ? prevCount + 1 : prevCount - 1));
  };

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          updateLikeCount={updateLikeCount}
        />
      ))}
    </div>
  );
}

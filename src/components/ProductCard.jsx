import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);  

  const handleHeartClick = () => {
    setLiked(!liked);
    toast.success(liked ? "Removed from Saved" : "Added to Saved");
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>

      <div className={styles.iconSection} onClick={handleHeartClick}>
        {liked ? (
          <AiFillHeart size={"20px"} style={{ color: 'red', cursor: 'pointer' }} />
        ) : (
          <AiOutlineHeart size={"20px"} style={{ color: 'black', cursor: 'pointer' }} />
        )}
      </div>
    </div>
  );
}

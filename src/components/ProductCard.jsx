import styles from '../styles/ProductCard.module.css';
import { CiHeart } from "react-icons/ci";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>

      <div className={styles.iconSection}>
      <CiHeart size={"20px"} />
      </div>
    </div>
  );
}

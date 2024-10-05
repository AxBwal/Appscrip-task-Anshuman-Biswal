import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topSection}>
        <div className={styles.logoImageSection}>
          <img src="/assets/Logo.png" alt="Company Logo" className={styles.logoImage} />
        </div>

        <div className={styles.logoText}>LOGO</div>

        <div className={styles.icons}>
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
          <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
        </div>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="/">SHOP</a></li>
          <li className={styles.navItem}><a href="/">SKILLS</a></li>
          <li className={styles.navItem}><a href="/">STORIES</a></li>
          <li className={styles.navItem}><a href="/">ABOUT</a></li>
          <li className={styles.navItem}><a href="/">CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  );
}

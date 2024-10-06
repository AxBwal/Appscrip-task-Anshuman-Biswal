import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart, faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.topSection}>
        <div className={styles.logoImageSection}>
          <img src="/assets/Logo.png" alt="Company Logo" className={styles.logoImage} />
        </div>

        <div className={styles.logoText}>LOGO</div>

        <div className={styles.icons}>
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          <FontAwesomeIcon icon={faHeart} className={styles.icon} />
          <FontAwesomeIcon icon={faBagShopping} className={styles.icon} />
          <FontAwesomeIcon icon={faUser} className={styles.icon} />

          <select value={selectedLanguage} onChange={handleLanguageChange} className={styles.languageDropdown}>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Portuguese">Portuguese</option>
          </select>
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

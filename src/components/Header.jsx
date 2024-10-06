import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { IoIosMenu } from "react-icons/io"; 
import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isMobile, setIsMobile] = useState(false); 
  const [menuOpen, setMenuOpen] = useState(false); 

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.topSection}>
        <div className={styles.leftSection}>
          {isMobile && (
            <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
              <IoIosMenu size={24} />
            </div>
          )}
          <div className={styles.logoImageSection}>
            <img src="/assets/Logo.png" alt="Company Logo" className={styles.logoImage} />
          </div>
        </div>

        <div className={styles.logoText}>LOGO</div>

        <div className={styles.icons}>
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          <FontAwesomeIcon icon={faHeart} className={styles.icon} />
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
          {!isMobile && (
            <>
              <FontAwesomeIcon icon={faBagShopping} className={styles.icon} />
              <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className={styles.languageDropdown}
              >
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Portuguese">Portuguese</option>
              </select>
            </>
          )}
        </div>
      </div>

   
      {(!isMobile || menuOpen) && (
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="/">SHOP</a></li>
            <li className={styles.navItem}><a href="/">SKILLS</a></li>
            <li className={styles.navItem}><a href="/">STORIES</a></li>
            <li className={styles.navItem}><a href="/">ABOUT</a></li>
            <li className={styles.navItem}><a href="/">CONTACT US</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

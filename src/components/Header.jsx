import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { IoIosMenu } from "react-icons/io"; // Import the menu icon
import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isMobile, setIsMobile] = useState(false); // State to track mobile screen
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  // Effect to check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    // Initial check
    handleResize();
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.topSection}>
        {/* Left Section: Menu Icon and Logo Image */}
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

        {/* Center: Logo Text */}
        <div className={styles.logoText}>LOGO</div>

        {/* Right Section: Icons */}
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

      {/* Navigation Menu */}
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

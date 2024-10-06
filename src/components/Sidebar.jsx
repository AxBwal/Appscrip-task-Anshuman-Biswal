import React, { useState, useEffect } from 'react';
import styles from "../styles/Sidebar.module.css";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

export async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
}

export default function Sidebar() {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [productCount, setProductCount] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [idealForChecked, setIdealForChecked] = useState([]);

  useEffect(() => {
    fetchProducts().then(products => setProductCount(products.length));
  }, []);

  const filterOptions = [
    { name: 'CUSTOMIZABLE', type: 'checkbox' },
    { name: 'IDEAL FOR', type: 'dropdown', options: ['Men', 'Women', 'Baby & Kids'] },
    { name: 'OCCASION', type: 'dropdown', options: ['All'] },
    { name: 'WORK', type: 'dropdown', options: ['All'] },
    { name: 'FABRIC', type: 'dropdown', options: ['All'] },
    { name: 'SEGMENT', type: 'dropdown', options: ['All'] },
    { name: 'SUITABLE FOR', type: 'dropdown', options: ['All'] },
    { name: 'RAW MATERIALS', type: 'dropdown', options: ['All'] },
    { name: 'PATTERN', type: 'dropdown', options: ['All'] },
  ];

  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  const handleCheckboxChange = (option) => {
    setIdealForChecked(prevState => 
      prevState.includes(option) ? prevState.filter(item => item !== option) : [...prevState, option]
    );
  };

  const unselectAll = () => {
    setIdealForChecked([]);
  };

  return (
    <div>
      {/* Header Container */}
      <div className={styles.headerContainer}>
        <div className={styles.leftContent}>
          <span className={styles.itemCount}>{productCount} ITEMS</span>
          <button
            onClick={() => setIsFilterVisible(!isFilterVisible)}
            className={styles.filterToggle}
          >
            {isFilterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
          </button>
        </div>
        <div className={styles.rightContent}>
          {/* Additional content if needed */}
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {isFilterVisible && (
          <aside className={styles.sidebar}>
            <div className={styles.filterOptions}>
              {filterOptions.map((option, index) => (
                <div key={index} className={styles.filterOption}>
                  <span className={styles.filterName} onClick={() => toggleDropdown(index)}>
                    {option.name} {option.type === 'dropdown' && (
                      <span>{openDropdown === index ? <RiArrowDropUpLine size={"20px"} />
                        : <RiArrowDropDownLine size={"20px"} />}</span>
                    )}
                  </span>

                  {/* Check for 'CUSTOMIZABLE' */}
                  {option.type === 'checkbox' && (
                    <label className={styles.checkboxLabel}>
                      <input type="checkbox" />
                    </label>
                  )}

                  {/* Dropdown with checkboxes for other filters */}
                  {option.type === 'dropdown' && openDropdown === index && (
                    <div className={styles.dropdownContent}>
                      {option.name === 'IDEAL FOR' && (
                        <>
                          <button className={styles.unselectAll} onClick={unselectAll}>Unselect all</button>
                          {option.options.map((opt, idx) => (
                            <label key={idx} className={styles.checkboxLabel}>
                              <input
                                type="checkbox"
                                checked={idealForChecked.includes(opt)}
                                onChange={() => handleCheckboxChange(opt)}
                              />
                              {opt}
                            </label>
                          ))}
                        </>
                      )}

                      {/* Default Dropdowns for other options */}
                      {option.name !== 'IDEAL FOR' && (
                        <select className={styles.filterDropdown}>
                          {option.options.map((opt, idx) => (
                            <option key={idx} value={opt}>{opt}</option>
                          ))}
                        </select>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

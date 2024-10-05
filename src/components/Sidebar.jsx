import React, { useState, useEffect } from 'react';
import styles from "../styles/Sidebar.module.css";

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

  useEffect(() => {
    fetchProducts().then(products => setProductCount(products.length));
  }, []);

  const filterOptions = [
    { name: 'CUSTOMIZABLE', type: 'checkbox' },
    { name: 'IDEAL FOR', type: 'dropdown', options: ['All', 'Men', 'Women', 'Baby & Kids'] },
    { name: 'OCCASION', type: 'dropdown', options: ['All'] },
    { name: 'WORK', type: 'dropdown', options: ['All'] },
    { name: 'FABRIC', type: 'dropdown', options: ['All'] },
    { name: 'SEGMENT', type: 'dropdown', options: ['All'] },
    { name: 'SUITABLE FOR', type: 'dropdown', options: ['All'] },
    { name: 'RAW MATERIALS', type: 'dropdown', options: ['All'] },
    { name: 'PATTERN', type: 'dropdown', options: ['All'] },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
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
          <select className={styles.sortDropdown}>
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE: HIGH TO LOW</option>
            <option>PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>

      {isFilterVisible && (
        <div className={styles.filterOptions}>
          {filterOptions.map((option, index) => (
            <div key={index} className={styles.filterOption}>
              <span className={styles.filterName}>{option.name}</span>
              {option.type === 'checkbox' ? (
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" />
                  <span>{option.name}</span>
                </label>
              ) : (
                <select className={styles.filterDropdown}>
                  {option.options.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

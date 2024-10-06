import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.newsletter}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <div className={styles.currency}>
            <h3>CURRENCY</h3>
            <p>USD</p>
            <p className={styles.smallText}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>
      </div>
      <div className={styles.middleSection}>
        <div className={styles.companyInfo}>
          <h3>mettā muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className={styles.quickLinks}>
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className={styles.followUs}>
          <h3>FOLLOW US</h3>
          <div className={styles.socialIcons}>
            <span>Instagram Icon</span>
            <span>LinkedIn Icon</span>
          </div>

         
          <div className={styles.mettaMuseAccepts}>
            <h3>mettā muse ACCEPTS</h3>
            <div className={styles.paymentIcons}>
              <img src="/assets/Frame.png" alt="Payment Methods" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  )
}

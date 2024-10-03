

// export default Footer;
import styles from './Footer.module.css';
const Footer = () => {
    return (
        <footer className={styles.footer}> {/* Applying footer styles */}
            <div className={styles.footerSection}> {/* Applying footer section styles */}
                <div className={styles.footer1}> {/* Applying footer1 styles */}
                    <h4>Need Help? Get a Callback!</h4>
                    <div className={styles.helpText}> {/* Applying helpText styles */}
                        <p>
                            Have any questions or need guidance on how to use Dailigo? Our team is 
                            here to help! Whether it's about navigating the platform, finding the right mentor, 
                            or resolving technical issues, simply request a callback and we’ll get in touch.
                        </p>
                        <div className={styles.callback}> {/* Applying callback styles */}
                            <input type="tel" id="phone" name="phone" placeholder="Place a callback" />
                            <button type="submit">submit</button>
                        </div>
                    </div>
                </div>
                <div className={styles.links}> {/* Applying links styles */}
                    <h4>Quick Links</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Mentorship</li>
                        <li>Resources</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className={styles.Contact}> {/* Applying Contact styles */}
                    <h4>Get in Touch</h4>
                    <p>Gaurav Rastogi</p>
                    <div className={styles.phonenum}>
                        <img src="calllogo.png" height="23px" alt="Call" />
                        <p>+91-9628233872</p>
                    </div>
                    <div className={styles.emailinfo}>
                        <img src="emiallogo.png" height="23px" alt="Email" />
                        <p>dailigo@gmail.com</p>
                    </div>
                </div>
                <div className={styles.socialmeadia}> {/* Applying social media styles */}
                    <h4>Follow Us</h4>
                    <a href="https://www.instagram.com/dailigo?igsh=YnRtYzQ4NHE5ZGdi">
                        <img src="instagram.png" height="35px" alt="Instagram" />
                    </a>
                    <img src="facebook.png" height="35px" alt="Facebook" />
                    <img src="linkedinlogo.png" height="35px" alt="LinkedIn" />
                </div>
            </div>
            <p className={styles.Copyright}>&copy; 2024 [DailiGo]. All rights reserved.</p> {/* Applying Copyright styles */}
        </footer>
    );
};
export default Footer;
